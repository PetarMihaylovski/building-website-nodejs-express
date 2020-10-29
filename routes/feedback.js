const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('This is supposed to be a feedback list!');
  });
  router.post('/', (req, res) => {});
  return router;
};
