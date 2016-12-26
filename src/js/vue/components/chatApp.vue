<template>
  <div>
    <div class="user-list-sidebar">
      <userList></userList>
    </div>

    <div class="chat-app-container">
      <div class="jumbotron">
        <div class="chat-app">
          <messageArea v-if="loggedIn" :user="user"></messageArea>
          <form v-on:submit.prevent="logIn" v-else>
            <label for="name">Enter a name</label>
            <input v-model="user.name" name="name" type="text">
          </form>
        </div>
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
      }
    },
    data: function () {
      return {
        greeting: "Check out this counter",
        loggedIn: false,
        user: {}
      }
    },
    methods: {
      sendMessage: function () {
        this.$store.dispatch('sendMessage');
      },
      logIn: function () {
        if(this.name !== "") {
          this.loggedIn = true
        }
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
