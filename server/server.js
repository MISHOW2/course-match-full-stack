const express = require('express');
const app = express();
const users = require('./config/db.js')
// Middleware to parse JSON
app.use(express.json());


// Test Route
app.get('/', (req, res) => {
  res.json({success:true, users})
});
// Import and use routes
app.use('/api', require('./routes/authRoute.js')); 

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
