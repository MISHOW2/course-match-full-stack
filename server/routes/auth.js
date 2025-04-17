const express = require('express');
const route = express.Router();
const users = require('../config/db.js'); // assuming this is a temporary array
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');


// Test Route
route.get('/', (req, res) => {
  res.send('Welcome to Course Match');
});

// Signup Route
route.post('/signup',[
  check("email", "Please provide a valid email").isEmail(),
  check("password", "password must be at least 6 characters").isLength({min:6})

], async(req, res) => {
  const { email, password } = req.body;


  try {
    // Check if user exists
    const user = users.find(user => user.email === email);
    if (user) {
      return res.status(400).json(
        { 
          msg: "User already exists" 
        }
      );
    }

  
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      msg: "User signed up successfully",
      email,
      hashedPassword
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = route;
