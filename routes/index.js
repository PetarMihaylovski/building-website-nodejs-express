const express = require('express');
const speakersRoute = require('./speakers');
const feedRoute = require('./feedback');

const router = express.Router();

module.exports = (service) => {
  router.use('/speakers', speakersRoute(service));
  router.use('/feedback', feedRoute(service));

  router.get('/', (req, rsp) => {
    rsp.render('pages/index', { pageTitle: 'Welcome' });
  });
  return router;
};
