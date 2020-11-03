const { response } = require('express');
const express = require('express');

const router = express.Router();

module.exports = (service) => {
  const { feedbackService } = service;
  router.get('/', async (req, res) => {
    const feedvback = await feedbackService.getList();
    res.status(200).json(feedvback);
  });
  // eslint-disable-next-line no-unused-vars
  router.post('/', (req, res) => {});
  return router;
};
