<template>
  <chatApp></chatApp>
</template>

<script>
  var chatApp = require('./chatApp.vue');
  module.exports = {
    name: 'chatAppRoot',
    store:  AppVeuxStore,
    computed: {
    },
    data: function () {
      return {}
    },
    methods: {},
    mounted: function () {
      socket.on('news', function (data) {
        console.log(data);
        this.message = data.message;
      }.bind(this))

   },
   components: {
    'chatApp': chatApp
   }
  }
</script>

<style scoped>
</style>
