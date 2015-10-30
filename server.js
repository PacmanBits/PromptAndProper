var express = require('express') ;
var path    = require('path')    ;

var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "public/PromptAndProper.html"));
});

var server = app.listen(3000, function () {
  var port = server.address().port;

  console.log('PromptAndProper listening on port %s', port);
});