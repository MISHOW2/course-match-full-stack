const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to Course Match API');
});

// Import and use routes
app.use('/api/auth', require('./routes/authRoute.js')); // Authentication routes
app.use('/api/courses', require('./routes/coursesRoute.js')); // Course-related routes

// Start server
app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
