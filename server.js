const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(express.static(__dirname + '/dist'));

// Start Server
app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening on localhost:8080`);
});
