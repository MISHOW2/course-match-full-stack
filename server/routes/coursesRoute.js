const express = require('express');
const route = express.Router();
const {getCourses,getCoursesByAps, getCourseByName,getSingleCourse} =require('../controllers/courseControllers.js')


// Match courses based on APS

route.post('/getCourses',getCourses);

route.post('/getCoursesByAps',getCoursesByAps)

route.post('/getCourseByName', getCourseByName);

route.post('/getSingleCourse', getSingleCourse)




module.exports = route;
