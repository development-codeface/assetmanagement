
var http = require('http');
var express = require('express');
var WSS = require('ws').Server;

var app = express().use(express.static('public'));
var server = http.createServer(app);
server.listen(9991, '127.0.0.1');

var wss = new WSS({ port: 9992 });
wss.on('connection', function(socket) {
  console.log('Opened Connection 🎉');

  var json = JSON.stringify({ message: 'Gotcha' });
  socket.send(json);
  console.log('Sent: ' + json);

  socket.on('message', function(message) {
    console.log('Received: ' + message);
    var requestVale   =JSON.parse(message);
    requestVale.timestamp  = new Date();
    wss.clients.forEach(function each(client) {
      var json = JSON.stringify({ message: 'Something changed' });
      
      client.send(JSON.stringify(requestVale));
      console.log('Sent: ' + json);
    });
  });

  socket.on('close', function() {
    console.log('Closed Connection 😱');
  });

});

var broadcast = function() {
  var json = JSON.stringify({
    message: 'Hello hello!'
  });

  wss.clients.forEach(function each(client) {
    client.send(json);
    console.log('Sent: ' + json);
  });
}
//setInterval(broadcast, 3000);
