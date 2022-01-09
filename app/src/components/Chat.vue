<script setup lang="ts">
import { io } from "socket.io-client";
import { ref } from 'vue'

// defineProps<{
//   msg: string
// }>()

const message = ref<null | string>(null)
const messages = ref<string[]>([])

const socket = io(import.meta.env.VITE_API_URL);

const sendMessage = () => {
  socket.emit('chat message', message.value)
  message.value = null
}

socket.on('chat message', function (message) {
  messages.value.push(message)
});
</script>

<template>
  <h1>Chat</h1>

  <input @keypress.enter="sendMessage" v-model="message" />

  <ul>
    <li v-for="message in messages">{{ message }}</li>
  </ul>
</template>
