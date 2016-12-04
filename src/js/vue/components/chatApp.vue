<template>
  <div class="container">
<!--     <ul class="nav nav-pills">
      <li role="presentation"><a>Home</a></li>
      <li role="presentation"><a>Login</a></li>
      <li role="presentation"><a>Sign Up</a></li>
    </ul>
 -->
    <div class="jumbotron">
      <p>{{ count }}</p>
      <div class="chat-area">
        <p> {{ message }} </p>
      </div>
      <a class="btn btn-info" v-on:click="sendMessage">Send</a>
    </div>

  </div>
</template>

<script>
  module.exports = {
    name: 'chatApp',
    store:  AppVeuxStore,
    computed: {
      count: function () {
        return this.$store.state.count;
      }
    },
    data: function () {
      return {
        greeting: "Check out this counter",
        message: ""
      }
    },
    methods: {
      sendMessage: function () {
        this.$store.dispatch('sendMessage');
      }
    }
  }
</script>

<style scoped>
  p {
    color: green;
  }
</style>
