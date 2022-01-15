<script setup lang="ts">
import { useRouter } from "vue-router"
import { ref } from "vue"
import socket from '../composables/socket'
import EVENT_TYPES from "../enums/eventTypes"

const router = useRouter()

const username = ref("The expeditor")
const createGameError = ref<null | string>(null)

const createGame = async () => {
  if (!username.value) {
    createGameError.value = "Please provide a username"
    return
  }

  socket.connect();

  socket.on(EVENT_TYPES.GAME.CREATED, (game) => {
    router.push({ name: 'lobby', params: { gameCode: game.code } })
  });

  socket.emit(EVENT_TYPES.GAME.CREATE, { creatorUsername: username.value })
}

const gameCode = ref<null | string>(null)
const joinGameError = ref<null | string>(null)

const joinGame = async () => {
  if (!username.value) {
    joinGameError.value = "Please provide a username"
    return
  }
  if (!gameCode.value || gameCode.value.length !== 6) {
    joinGameError.value = "Please provide a 6-letter game code"
    return
  }

  socket.connect();

  socket.on(EVENT_TYPES.GAME.JOIN_ERROR, () => {
    joinGameError.value = "Unable to join game"
  });

  socket.on(EVENT_TYPES.GAME.JOINED, (game) => {
    router.push({ name: 'lobby', params: { gameCode: game.code } })
  });

  socket.emit(EVENT_TYPES.GAME.JOIN, { gameCode: gameCode.value, creatorUsername: username.value })
}

</script>

<template>
  <h1>Home</h1>

  <section>
    <input type="text" v-model="username" placeholder="Username" />
    <div v-if="createGameError">{{ createGameError }}</div>
  </section>

  <section>
    <button @click="createGame">Create game</button>
  </section>

  <section>
    <input type="text" v-model="gameCode" placeholder="Game code" />
    <button @click="joinGame">Join game</button>
    <div v-if="joinGameError">{{ joinGameError }}</div>
  </section>
</template>
