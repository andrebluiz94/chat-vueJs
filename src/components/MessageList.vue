<template>
  <div class="message-list">
    <h4>Messages</h4>
    <hr />
    <div class="message-group" id="chat-messages" v-chat-scroll="{ smooth: true }">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div class="clearfix">
          <h4 class="message-title">{{ message.name }}</h4>
          <small class="text-muted float-right">@{{ message.username }}</small>
        </div>
        <p class="message-text">{{ message.text }}</p>
        <div class="clearfix">
          <small class="text-muted float-right">{{ message.date }}</small>
        </div>
      </div>
      <div class="user-typing">
        <small class="text-muted" v-if="userTyping">@{{ userTyping }} Está digitando....</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "message-list",
  computed: {
    ...mapState(["messages", "userTyping"])
  }
};
</script>

<style>
.message-list {
  margin-bottom: 15px;
  padding-right: 15px;
}

.message-group {
  height: 65vh !important;
  overflow: scroll;
}

.message {
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
}

.message-title {
  font-size: 1rem;
  display: inline;
}

.user-typing {
  height: 1rem;
}
</style>
