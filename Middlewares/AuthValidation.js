const Joi = require("joi");

const signupValdiadtion = (req, res, next) => {
  const Schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(30).required,
  });

  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }

  next();
};

const loginValdiadtion = (req, res, next) => {
    const Schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(3).max(30).required,
    });
  
    const { error } = Schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "Bad request", error });
    }
  
    next();
  };

  module.exports = {
    signupValdiadtion,
    loginValdiadtion
  }
