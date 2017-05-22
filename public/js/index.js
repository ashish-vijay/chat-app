var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'equ',
    text: 'hala'
  });
});



socket.on('newMessage', function(message) {
  console.log('newmessage', message);
});


socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
