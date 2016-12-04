<template>
  <chatApp ref="chatApp"
    :status="status"></chatApp>
</template>

<script>
  var chatApp = require('./chatApp.vue');
  module.exports = {
    name: 'chatAppRoot',
    store:  AppVeuxStore,
    computed: {
    },
    data: function () {
      return {
        status: ""
      }
    },
    methods: {},
    mounted: function () {
      socket.on('statusChange', function (data) {
        this.status = data.status;
      }.bind(this))
   },
   components: {
    'chatApp': chatApp
   }
  }
</script>

<style scoped>
</style>
