<template>
  <div class="user-list-panel">
    <p>Users Online Now</p>
    <ul>

      <li v-for="user in currentRoom.users">
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
      currentRoom: function () {
        return this.$store.getters.rooms.filter(function (room) {
          return room.id == this.$store.getters.currentRoomId
        }.bind(this))[0]
      }
    },
    data: function () {
      return {}
    },
    methods: {
    },
    mounted: function () {},
    components: {}
  }
</script>

<style scoped>
</style>
