const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  //Get the token
  const token = req.header('Authorization');
  if (!token) {
    const error = new Error('Access denied');
    res.status(401);
    next(error);
  }

  //Verify the token
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400);
    next(error);
  }
}

module.exports = verifyToken;