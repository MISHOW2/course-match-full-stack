const { universities } = require('../config/db.js'); // Make sure universities have courses inside


const getCourses =  (req, res) => {
  const { aps, university, courseName } = req.body;

  
  // Validate APS
  if (typeof aps !== 'number' || isNaN(aps)) {
    return res.status(400).json({ success: false, msg: 'APS must be a valid number.' });
  }
+++++++ +++++++ +++++ +++++
  if (aps < 0 || aps > 48) {
    return res.status(400).json({ success: false, msg: 'APS must be between 0 and 48.' });
  }

  let matchedCourses = [];

  // Loop through universities
  universities.forEach(uni => {
    // Check if university matches (if provided)
    if (university && uni.name.toLowerCase() !== university.toLowerCase()) {
      return;
    }

    // Loop through courses of this university
    uni.courses.forEach(course => {
      const apsMatch = course.minAps <= aps;
      const nameMatch = courseName
        ? course.name.toLowerCase().includes(courseName.toLowerCase())
        : true;

      if (apsMatch && nameMatch) {
        matchedCourses.push({
          university: uni.name,
          location: uni.location,
          ...course
        });
      }
    });
  });

  if (matchedCourses.length === 0) {
    return res.status(404).json({ success: false, msg: 'No courses found matching the criteria.' });
  }

  res.json({ success: true, matchedCourses });
}

const getCoursesByAps = (req,res)=>{
  const {aps} = req.body;

    // Validate APS
    if (typeof aps !== 'number' || isNaN(aps)) {
      return res.status(400).json({ success: false, msg: 'APS must be a valid number.' });
    }
  

    if (aps < 0 || aps > 48) {
      return res.status(400).json({ success: false, msg: 'APS must be between 0 and 48.' });
    }
  
    let matchedCourses = [];
    universities.forEach(uni=>{
     // Loop through courses of this university
     uni.courses.forEach(course => {
      const apsMatch = course.minAps <= aps;
     
      if (apsMatch) {
        matchedCourses.push({
          university: uni.name,
          location: uni.location,
          ...course
        });
      }
    });
  })

  res.json({ success: true, matchedCourses });
}

const getCourseByName =(req, res) => {
  console.log('Raw body:', req.body); // 👈 Helps debug!

  const { courseName } = req.body;
  console.log('Searching for course:', courseName);

  const matchedCourses = [];

  universities.forEach(uni => {
    uni.courses.forEach(course => {
      if (
        courseName &&
        course.name.toLowerCase().includes(courseName.trim().toLowerCase())
      ) {
        
        matchedCourses.push({
          university: uni.name,
          location: uni.location,
          ...course,
        });
        if (matchedCourses.length===0) {
          res.json({ success: false, msg:"no course with that name found" });
        }
      }
      
    });
  });
 
  res.json({ success: true, matchedCourses });
}


const getSingleCourse = (req,res)=>{
  const {courseName} = req.body;


  const singleCourse = universities.forEach(uni=>{
    const matchedCourses = [];
    uni.courses.forEach(course =>{
      if (
        courseName &&
        course.name.toLowerCase().includes(courseName.trim().toLowerCase())
      ){
         matchedCourses.push({
          university: uni.name,
          location: uni.location,
          
        });
        if (matchedCourses.length===0) {
          res.json({ success: false, msg:"no course with that name found" });
        }
      }
    })
  })
}
module.exports = {
  getCourses,
  getCoursesByAps,
  getCourseByName,
  getSingleCourse
}