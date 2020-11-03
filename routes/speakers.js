const express = require('express');

const router = express.Router();

module.exports = (service) => {
  const { speakerService } = service;

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    res.status(200).json(speakers);
  });
  router.get('/:name', (req, res) => {
    res.send(`This is supposed to be a detailed page for ${req.params.name}!`);
  });
  return router;
};
