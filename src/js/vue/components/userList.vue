<template>
  <div class="user-list-panel">
    <p>Users Online Now`</p>
    <ul>
      <li v-for="user in roomUsers">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  module.exports = {
    name: 'userList',
    store: AppVeuxStore,
    computed: {
      roomUsers: function () {
        return this.$store.getters.room.users
      }
    },
    data: function () {
      return {}
    },
    methods: {},
    mounted: function () {},
    components: {}
  }
</script>

<style scoped>
</style>
