const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "this field is required").notEmpty(),
  check("phone", "this field is required").notEmpty(),
  check("email", "this field is required").notEmpty(),
  check("email", "this field should be a valid email").isEmail(),
  check("password", "this field require 6 char min").isLength({ min: 6 }),
  // check("city", "this field is required").notEmpty(),
  // check("country", "this field is required").notEmpty(),
  // check("postalCode", "this field is required").notEmpty(),
  // check("adresse", "this field is required").notEmpty(),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
