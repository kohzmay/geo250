var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');

var app = express();
var APP_PATH = path.join(__dirname, 'dist');

app.set('port', (process.env.PORT || 3000));

app.get('*', function(req, res) {
  console.log('this is firing');
  res.sendFile(APP_PATH), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
});

app.use('/', express.static(APP_PATH));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', express.static(APP_PATH));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
