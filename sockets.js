module.exports = function (io) {
  io.on('connection', function (socket) {

    socket.emit('statusChange', { status: 'Connected'});

    socket.on('new message', function (data) {
      socket.broadcast.emit('new message', data);
    })
  });
}
