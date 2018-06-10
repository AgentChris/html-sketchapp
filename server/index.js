const fs = require('fs');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

var utils = require('./utils');

// express server

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>');
});

// get sketch json
router.get('/sketch-json', function(req, res) {
  const fileName = '../dist-sketchapp/page.asketch.json';

  let file = require(fileName);
  const json_string = utils.transformSketchMiddlware(file);

  fs.writeFile(fileName, json_string, function (err) {
    if (err) return console.log(err);
  });
  res.json(JSON.parse(json_string));
});

app.use('/api', router);
app.listen(3000, function () {
  console.log('listening on *:3000');
});

// socket server

io.on('connection', function (socket) {
  console.log('sketch client connected');
  socket.on('update sketch', function(msg){
    console.log('message: ' + msg);
    utils.runSketchCommand();
    console.log("command done");
  });
});

http.listen(3001, function () {
  console.log('listening on *:3001');
});
