const express = require('express');
const path = require('path');
const routes = require('./routes');
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = express();
const SERVER_PORT = 3000;

// let express know what template engine is used
app.set('view engine', 'ejs');
// let express know where to find the views
app.set('views', path.join(__dirname, './views'));

// middleware to use the static folder
app.use(express.static(path.join(__dirname, './static')));

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
  })
);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
