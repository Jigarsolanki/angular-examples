var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.html');
});

io.on('connection', function(socket){
  socket.on('ChatMessage', function(msg){
    console.log('message: ' + JSON.stringify(msg));
    io.emit('ChatMessage', msg);
  });

  socket.on('user:joined', function(msg){
    console.log('user joined: ' + JSON.stringify(msg));
    io.emit('user:joined', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

