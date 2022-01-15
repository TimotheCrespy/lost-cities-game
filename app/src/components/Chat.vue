<script setup lang="ts">
import { io } from "socket.io-client";
import { ref } from 'vue'

const message = ref<null | string>(null)
const messages = ref<string[]>([])

const socket = io(import.meta.env.VITE_WS_URL);

const sendMessage = () => {
  socket.emit('send chat message', message.value)
  message.value = null
}

socket.on('chat message', function (message) {
  messages.value.push(message)
});
</script>

<template>
  <section>
    <h2>Chat</h2>

    <input @keypress.enter="sendMessage" v-model="message" />

    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>
  </section>
</template>
