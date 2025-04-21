const express = require('express');
const route = express.Router();
const { courses } = require('../config/db.js'); // Destructure courses only

// Get all courses
route.get('/allcourses', (req, res) => {
  res.send(courses);
});

// Match courses based on marks
route.post('/getmarks', (req, res) => {
  const { subjects } = req.body;

  if (!subjects || !Array.isArray(subjects) || subjects.length < 6) {
    return res.json({success:false , msg:"please provide at least 6 subjects "})
  }

  // Convert marks to APS points
  const apsPoints = subjects.map(subject => {
    const mark = subject.mark;
    if (mark >= 80 && mark <= 100) return 7;
    if (mark >= 70) return 6;
    if (mark >= 60) return 5;
    if (mark >= 50) return 4;
    if (mark >= 40) return 3;
    if (mark >= 30) return 2;
    if (mark >= 0) return 1;
    return 0; // For invalid or missing marks
  });

  // Sort and get top 6 subjects
  const top6 = apsPoints.sort((a, b) => b - a).slice(0, 6);
  const totalAPS = top6.reduce((sum, point) => sum + point, 0);

  // Match courses where APS meets or exceeds min requirement
  const matchedCourses = courses.filter(course => totalAPS >= course.minAps);

  // Send response
  res.json({
    aps: totalAPS,
    matchedCourses
  });
});

module.exports = route;
