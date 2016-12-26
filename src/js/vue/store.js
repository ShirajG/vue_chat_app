Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    count: 0,
    currentRoomId: 123,
    rooms: [
      {
        id: 123,
        users: [
          {
            name: "Testing",
            id: 2234092432
          }
        ]
      },
      {
        id: 456,
        users: [
          {
            name: "Test User 2",
            id: 242342345
          }
        ]
      }
    ]
  },
  mutations: {
    JOIN_ROOM: function (state, data) {
      state.currentRoomId = data.roomId;
    }
  },
  actions: {
    sendMessage: function (context, data) {
      socket.emit('new message', data);
    },
    joinRoom: function (context, data) {
      context.commit('JOIN_ROOM', data);
      socket.emit('join room', data.roomId);
    }
  },
  getters: {
    rooms: function (state) {
      return state.rooms
    },
    currentRoomId: function (state) {
      return state.currentRoomId
    }
  }
})

