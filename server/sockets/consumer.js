
module.exports = function(io) {
  io.on('connection', function(socket) {
      socket.on('message', function(message) {
          logger.log('info',message.value);
          socket.emit('ditConsumer',message.value);
          console.log('from console',message.value);
      });
      socket.on('userLoggedIn', (message)=>{
        console.log("YES!!!!! someone logged in")
        socket.broadcast.emit('userLoggedIn', `${message} logged in.`);
      })
      socket.emit('hello', 'can you hear me?', 1, 2, 'abc'); // emit an event to the socket
    // emitToHello = (msg) => {
    //   socket.emit('hello', msg); // emit an event to the socket
    // }
    io.emit('broadcast', {msg:'hi'}); // emit an event to all connected sockets
  });
};
