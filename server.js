const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const SERVER_PORT = 3000;

// let express know what template engine is used
app.set('view engine', 'ejs');
// let express know where to find the views
app.set('views', path.join(__dirname, './views'));

// middleware to use the static folder
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
