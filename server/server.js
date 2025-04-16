const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to Course Match");
});

app.listen(5000, () => {
  console.log("Listening on PORT 5000");
});
