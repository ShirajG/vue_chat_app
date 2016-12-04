module.exports = function (io) {
  io.on('connection', function (socket) {

    socket.emit('news', { message: 'Connected to chat.'});

    socket.on('increment', function (data) {
      console.log('incremented');
    })
  });
}
