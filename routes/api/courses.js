const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');
const { response } = require('express');
const { route } = require('./users');

// @route  POST api/courses
// @desc   add course

router.post('/addCourse', async (req, res) => {
  const { title, type, videoUrl, description } = req.body;
  let course = new Course({
    title,
    type,
    videoUrl,
    description,
  });
  try {
    await course.save();
    res.send('Course saved ');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

router.get('/', async (req, res) => {
  let courses = await Course.find({})
    .then(response => {
      if (response.length == 0) {
        throw error;
      }
      res.send(response);
    })
    .catch(err => {
      res.send('There is no courses');
    });
});

module.exports = router;
