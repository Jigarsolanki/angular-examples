var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  socket.on('ChatMessage', function(msg){
    console.log('message: ' + msg);
    io.emit('ChatMessage', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

