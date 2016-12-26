module.exports = function (io) {
  io.on('connection', function (socket) {

    socket.emit('statusChange', { status: 'Connected'});

    socket.on('new message', function (data) {
      socket.in(data.roomId).emit('new message', data.message);
    })

    socket.on('join room', function (data) {
      socket.join(data);
    })
  });
}
