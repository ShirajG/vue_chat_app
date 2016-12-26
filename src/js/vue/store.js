Vue.use(Vuex);

module.exports = new Vuex.Store({
  state: {
    count: 0,
    room: {
      users: [
        {
          name: 'testguy'
        }
      ]
    }
  },
  mutations: {
    decrement: function (state) {
      state.count--;
    }
  },
  actions: {
    sendMessage: function (context, data) {
      socket.emit('new message', data);
    }
  },
  getters: {
    room: function (state) {
      return state.room
    }
  }
})

