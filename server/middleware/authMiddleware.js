const { check, validationResult } = require('express-validator');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Use your local in-memory users database
const users = require('../config/db.js');

// ✅ Validation middleware
const validateCredentials = [
  check('email', 'Please provide a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


module.exports = validateCredentials;
