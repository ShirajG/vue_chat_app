<template>
  <div class="container">
    <div class="jumbotron">
      <p>{{ count }}</p>
      <div class="chat-app">
        <p> {{ status }} </p>
        <messageArea v-if="status == 'Connected' "></messageArea>
      </div>
    </div>
  </div>
</template>

<script>
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
        greeting: "Check out this counter"
      }
    },
    methods: {
      sendMessage: function () {
        this.$store.dispatch('sendMessage');
      }
    },
    components: {
      'messageArea': messageArea
    }
  }
</script>

<style scoped>
  p {
    color: green;
  }
</style>
