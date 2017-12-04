var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


users = [];
connections = [];

server.listen(process.env.PORT || 8080);
console.log('server running ...');

app.get('/', function(req, res) {
		res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
	//console.log(socket);
		connections.push(socket);
		console.log('Connected: %s sockets connected' , connections.length);

		// Disconnect
		socket.on('disconnect', function(data) {
			connections.splice(connections.indexOf(socket), 1);
			console.log('Disconnected: %s sockets connected', connections.length);
		})
		

		// Send Message
		socket.on('send message', function(data){
			io.sockets.emit('new message', {msg:data});
		});
		socket.on('create user', function(data){
			io.sockets.emit('new user', {user:data});
		});
		socket.on('create userNickname', function(data){
			io.sockets.emit('new userNickname', {userNickname:data});
		});

});