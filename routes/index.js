const express = require('express');
const speakersRoute = require('./speakers');
const feedRoute = require('./feedback');

const router = express.Router();

module.exports = () => {
  router.use('/speekers', speakersRoute());
  router.use('/feedback', feedRoute());

  router.get('/', (req, rsp) => {
    rsp.render('pages/index', { pageTitle: 'Welcome' });
  });
  return router;
};
