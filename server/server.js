const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import and use routes
app.use('/auth', require('./routes/auth.js')); 

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
