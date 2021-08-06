// validation
import Joi from "@hapi/joi";

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// To do validation
const todoValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required().max(255),
    description: Joi.string().min(10).max(1000),
    deadline: Joi.date(),
    associated_users: Joi.array()
  });

  return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.todoValidation = todoValidation;