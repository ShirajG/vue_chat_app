<template>
  <div>
    <div class="user-list-sidebar">
      <userList :current-room-id='currentRoomId'></userList>
    </div>

    <div class="chat-app-container">
      <div class="chat-app">
        <ul class="nav nav-tabs">
          <li v-on:click.prevent="switchRoom('lobby', $event)" class="active" role="presentation"><a href="">Lobby</a></li>
          <li v-on:click.prevent="switchRoom(123, $event)" role="presentation"><a href="">Other Room</a></li>
          <li v-on:click.prevent="switchRoom(456, $event)" role="presentation"><a href="">Another Room</a></li>
        </ul>
        <messageArea roomId='lobby' v-if="loggedIn" :user="user"></messageArea>
        <form v-on:submit.prevent="logIn" v-else>
          <label for="name">Enter a name</label>
          <input v-model="user.name" name="name" type="text">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  var userList = require('./userList.vue');
  var messageArea = require('./messageArea.vue');
  module.exports = {
    name: 'chatApp',
    store:  AppVeuxStore,
    props: ['status'],
    computed: {
      count: function () {
        return this.$store.state.count;
      },
      currentRoomId: function() {
        return this.$store.getters.currentRoomId;
      }
    },
    data: function () {
      return {
        greeting: "Check out this counter",
        loggedIn: false,
        user: {},
      }
    },
    methods: {
      logIn: function () {
        if(this.name !== "") {
          this.loggedIn = true
        }
      },
      switchRoom: function (roomId, event) {
        $('.nav-tabs li').removeClass('active');
        $(event.target).parent().addClass('active');
        this.$store.dispatch('switchRoom', roomId);
      }
    },
    components: {
      'messageArea': messageArea,
      'userList': userList
    }
  }
</script>

<style scoped>
  p {
    color: green;
  }
  .user-list-sidebar {
    position: fixed;
    width: 20%;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .chat-app-container {
    position: fixed;
    left: 20%;
    width: 80%;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
