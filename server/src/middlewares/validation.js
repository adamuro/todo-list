const Joi = require('@hapi/joi');

const registerValidation = (req, res, next) => {
  //Create user registration schema
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    username: Joi.string()
      .min(4)
      .max(32)
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });

  //Validate new user data
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400)
    next(new Error(error));
  }

  //Go back to register route
  next();
};

const loginValidation = (req, res, next) => {
  //Create user login schema
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(8)
      .required(),
  });

  //Validate login data
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400);
    next(new Error(error));
  }

  //Go back to login route
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
}