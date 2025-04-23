const express = require('express');
const route = express.Router();
const {  universities } = require('../config/db.js'); // Destructure courses only

// Get all courses
route.get('/allcourses', (req, res) => {
  res.send(courses);
});

// Match courses based on marks
route.post('/getCourses', (req, res) => {

  //get input from use
  const { aps,university, courseName} = req.body;

   // Check if aps is provided and is a number
   if (typeof aps !== 'number' || isNaN(aps)) {
    return res.status(400).json({ success: false, msg: 'APS must be a valid number.' });
  }

  // Check if aps is within a reasonable range
  if (aps < 0 || aps > 48) {
    return res.status(400).json({ success: false, msg: 'APS must be between 0 and 48.' });
  }

  //Filter courses by APS: 

  
});

module.exports = route;
