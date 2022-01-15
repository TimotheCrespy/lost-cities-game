<script setup lang="ts">
import { ref } from 'vue'
import socket from '../composables/socket'
import EVENT_TYPES from "../enums/eventTypes"

const props = defineProps<{
  gameCode: string
}>()

const message = ref<null | string>(null)
const messages = ref<string[]>([])

socket.on(EVENT_TYPES.CHAT.MESSAGE, (data) => {
  messages.value.push(data.message)
})

const sendMessage = () => {
  socket.emit(EVENT_TYPES.CHAT.MESSAGE, { gameCode: props.gameCode, message: message.value })
  message.value = null
}
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
