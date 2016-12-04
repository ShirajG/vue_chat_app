module.exports = function (io) {
  io.on('connection', function (socket) {

    socket.emit('statusChange', { status: 'Connected'});

    socket.on('new message', function (data) {
      io.emit('new message', data);
    })
  });
}
