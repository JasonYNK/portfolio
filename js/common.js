document.querySelector('.chat-authorization-form button').addEventListener('click', (e) => {
	e.preventDefault();
});

let messageText = document.querySelector('.chat-panel input');
let sendButton = document.querySelector('.chat-sendBtn');
let messageContainer = document.querySelector('.message-container');

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

let socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener('message', function(event) {
    	console.log(event);
        addMessage(event.data);
    });

    socket.addEventListener('error', function() {
        alert('Соединение закрыто или не может быть открыто');
    });

    function addMessage(message) {
    	console.log('add');
        let messageItem = document.createElement('li');

        //messageItem.className = "list-group-item";
        messageItem.textContent = message;

        messageContainer.appendChild(messageItem);
        //messageContainer.scrollTop = messageContainer.scrollHeight;
    }

    function sendMessage() {
    	console.log('send');
        let message = messageText.value;

        socket.send(message);

        messageText.value = '';
    }

    sendButton.addEventListener('click', sendMessage);
   // messageText.addEventListener('change', sendMessage);