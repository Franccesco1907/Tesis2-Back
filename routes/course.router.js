const express = require('express');
const CourseService = require('./../services/course.service');

const router = express.Router();
const courseService = new CourseService();

router.get('/id_capacitacion=:id_capacitacion', async (req, res) => {
  try {
    let { id_capacitacion } = req.params;
    const courses = await(courseService.getCourses(id_capacitacion));
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
  }
});

router.get('/id_capacitacion=:id_capacitacion/id_curso=:id_curso', async (req, res) => {
  try {
    let { id_capacitacion, id_curso } = req.params;
    const course = await(courseService.getCourse(id_capacitacion, id_curso));
    res.status(200).json(course);
  } catch (error) {
    console.error(error);
  }
});


module.exports = router;