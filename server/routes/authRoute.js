const express = require('express');
const route = express.Router();
const users = require('../config/db.js');
const validateCredentials = require('../middleware/authMiddleware.js');
const { signUp, login } = require('../controllers/authControllers.js');


// Simple route to test Google login link
route.get('/google', (req, res) => {
  res.send('<a href="/api/auth/google">Login with Google</a>');
});



// Local signup
route.post('/signup', validateCredentials, signUp);

// Local signin
route.post('/signin', validateCredentials, login);

module.exports = route;
