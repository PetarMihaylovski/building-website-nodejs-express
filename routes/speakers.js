const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('This is supposed to be a speakers list!');
  });
  router.get('/:name', (req, res) => {
    res.send(`This is supposed to be a detailed page for ${req.params.name}!`);
  });
  return router;
};
