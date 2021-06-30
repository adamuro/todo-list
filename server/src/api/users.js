const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const {
  registerValidation,
  loginValidation,
} = require('../middlewares/validation');

const router = Router();

//Register new user
router.post('/register', registerValidation, async (req, res, next) => {
  try {
    //Deconstruct the request body
    const { email, username, password } = req.body;

    //Check if email is already used
    const emailUsed = await User.findOne({ email });
    if (emailUsed) {
      const error = new Error("Email is already used.");
      res.status(400);
      return next(error);
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });

    //Save new user
    const createdUser = await user.save();

    //Send back created user info
    res.json({
      id: createdUser._id,
      email: createdUser.email,
      username: createdUser.username,
    })
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.post('/login', loginValidation, async (req, res, next) => {
  try {
    //Deconstruct the request body
    const { email, password } = req.body;

    //Check if email is assigned to any user
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error('Invalid email');
      res.status(400);
      return next(error);
    }

    //Check if password is valid
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      const error = new Error('Invalid password');
      res.status(400);
      return next(error);
    }

    //Create and assign a token
    const token = jwt.sign({ _id: user._id, username: user.username },
      process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token);

    //Send back the token
    res.json({ token });
  } catch (error) {
    res.status(400);
    next(error);
  }
})

module.exports = router;