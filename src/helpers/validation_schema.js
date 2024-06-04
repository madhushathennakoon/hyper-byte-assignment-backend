const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().min(3).max(50).alphanum().required().messages({
    "any.required": "User name is required.",
    "string.empty": "User name cannot be empty.",
    "string.min": "User name should be at least 3 characters long.",
    "string.max": "User name should not exceed 50 characters.",
    "string.alphanum":
      "User name should only contain alphanumeric characters.(letters and numbers)",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.pattern.base":
        'Password must contain only letters, numbers, or "@" and be between 3 and 30 characters long.',
    }),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    .required()
    .messages({
      "any.required": "Password is required.",
      "string.empty": "Password cannot be empty.",
      "string.pattern.base":
        'Password must contain only letters, numbers, or "@" and be between 3 and 30 characters long.',
    }),
});

const createRestaurantSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(50).required().messages({
    "any.required": "User name is required.",
    "string.empty": "User name cannot be empty.",
    "string.min": "User name should be at least 3 characters long.",
    "string.max": "User name should not exceed 50 characters.",
    "string.alphanum":
      "User name should only contain alphanumeric characters.(letters and numbers)",
  }),
  address: Joi.string().min(3).max(50).required().messages({
    "any.required": "Address is required.",
    "string.empty": "Address cannot be empty.",
    "string.max": "Address should not exceed 50 characters.",
    "string.min": "Address should be at least 3 characters long.",
  }),
  telephone: Joi.string()
    .pattern(new RegExp("^(\\+94|0)[1-9][0-9]{8}$"))
    .required()
    .messages({
      "any.required": "Phone number is required.",
      "string.empty": "Phone number cannot be empty.",
      "string.pattern.base": "Phone number is invalid.",
    }),
});

const updateRestaurantSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(50).required().messages({
    "any.required": "User name is required.",
    "string.empty": "User name cannot be empty.",
    "string.min": "User name should be at least 3 characters long.",
    "string.max": "User name should not exceed 50 characters.",
    "string.alphanum":
      "User name should only contain alphanumeric characters.(letters and numbers)",
  }),
  address: Joi.string().max(60).required().messages({
    "any.required": "Address line is required.",
    "string.empty": "Address line cannot be empty.",
    "string.max": "Address line should not exceed 60 characters.",
  }),
  telephone: Joi.string()
    .pattern(new RegExp("^(\\+94|0)[1-9][0-9]{8}$"))
    .required()
    .messages({
      "any.required": "Phone number is required.",
      "string.empty": "Phone number cannot be empty.",
      "string.pattern.base": "Phone number is invalid.",
    }),
});

module.exports = {
  signupSchema,
  signinSchema,
  createRestaurantSchema,
  updateRestaurantSchema,
};
