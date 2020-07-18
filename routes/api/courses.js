const express = require('express');
const router = express.Router();
const Course = require('../../models/Course');

// @route  POST api/courses
// @desc   add course
router.post('/addCourse', async (req, res) => {
  const { title, type, videoUrl, description } = req.body;
  const vId = videoUrl.substr(32, 11);
  var x = 'https://www.youtube.com/embed/' + vId;
  const videoImg = 'https://img.youtube.com/vi/' + vId + '/0.jpg';
  let course = new Course({
    title,
    type,
    videoUrl: x,
    description,
    videoImg,
  });
  try {
    await course.save();
    res.send('Course saved ');
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// @route GET All courses /api/courses
router.get('/', async (req, res) => {
  await Course.find({})
    .then(response => {
      if (response.length == 0) {
        // The error thrown when there is no data in the response
        throw error;
      }
      res.send(response);
    })
    .catch(err => {
      res.status(500).send('Server error');
    });
});

// @route GET courses with same title /api/courses/:title
router.get('/:type', async (req, res) => {
  const { type } = req.params;
  await Course.find({ type })
    .then(response => {
      if (response.length == 0) {
        // The error thrown when there is no data in the response
        throw error;
      }
      res.send(response);
    })
    .catch(err => {
      res.status(500).send('Server error');
    });
});

// @ route api/courses/:title
// @ desc update one course base on it's title
router.put('/:title', async (req, res) => {
  const { title } = req.params;
  const { type, videoUrl, description } = req.body;
  const vId = videoUrl.substr(32, 11);
  var x = 'https://www.youtube.com/embed/' + vId;
  const videoImg = 'https://img.youtube.com/vi/' + vId + '/0.jpg';
  await Course.where({ title })
    .update({ $set: { type, videoUrl: x, description, videoImg } })
    .exec()
    .then(response => res.send('data updated'))
    .catch(err => res.send(err));
});

module.exports = router;
