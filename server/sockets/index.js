var sio = require('socket.io');
var io = null;


exports.io = function () {
  return io;
};

exports.initialize = function(server, options={}) {
    io = sio(server,options);
  return io
};

