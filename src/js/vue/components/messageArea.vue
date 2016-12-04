<template>
  <div class="message-area">
    <div id="messages" class="messages">
      <p v-for="message in messages" >
        <span class="username">{{ message.user}}: </span>
        <span>{{ message.text }}</span>
      </p>
    </div>
    <div class="user-message-entry">
      <form v-on:submit.prevent="onSubmit" class="message-form">
        <div class="form-group">
          <input v-model="userMessage" class="form-control" type="text">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  module.exports = {
    name: 'messageArea',
    store: AppVeuxStore,
    props: ['user'],
    computed: {
    },
    data: function () {
      return {
        messages: [],
        userMessage: ""
      }
    },
    methods: {
      onSubmit: function () {
        if(this.canSendMessage()){
          this.sendMessage();
          this.scrollChatWindow();
          this.clearUserMessage();
        }
      },
      scrollChatWindow: function () {
        $messageArea = $('#messages');
        $($messageArea).animate({ scrollTop: $($messageArea).prop("scrollHeight")}, 500);
      },
      canSendMessage: function() {
        if (this.userMessage == "") { return false; }
        return true;
      },
      sendMessage: function () {
        var message = {
          user: this.user.name,
          text: this.userMessage
        }

        this.$store.dispatch('sendMessage', message);
      },
      clearUserMessage: function () {
        this.userMessage = "";
      },
      receiveMessage: function (message) {
        this.messages.push(message);
      },
      uuid: function () {
        return Math.random(999999);
      }
    },
    mounted: function () {
      socket.on('new message', function (data) {
        this.messages.push(data);
      }.bind(this))
    }
  }
</script>

<style scoped>
.message-form {
  margin-top: 10px;
}

.messages {
  padding: 20px;
  padding-bottom: 0;
  min-height: 300px;
  max-height: 300px;
  border-radius: 5px;
  overflow: scroll;
  background-color: white;
  border: 1px solid #00bbff;
}
</style>
