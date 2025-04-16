const express = require('express');
const route = express.Router();
const users = require('../config/db.js')
// Test Route
route.get('/', (req, res) => {
  res.send('Welcome to Course Match');
});

// Signup Route
route.post('/signup', (req, res) => {
  const { email, password } = req.body;

   //check if user exist

   const user = users.find(user=> user.email===email);

   if (user) {
    res.json({
        msg:"invalid credentials"  
    })
   }
   users.push(
    {
      email,
      password
    }
   )

  res.json({
    msg:"user sign up successfully",
    email
   });
});

module.exports = route;
