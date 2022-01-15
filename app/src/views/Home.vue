<script setup lang="ts">
import Chat from '@/components/Chat.vue'
import { useRouter } from "vue-router"
import { ref } from "vue"
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_WS_URL);
const router = useRouter()

const username = ref("The expeditor")
const createGameError = ref<null | string>(null)

const createGame = async () => {
  if (!username.value) {
    createGameError.value = "Please provide a username"
    return
  }

  socket.emit("game:create", { creatorUsername: username.value })
}

socket.on("game:created", (game) => {
  console.log(game)
  router.push({ name: 'lobby', params: { gameCode: game.code } })
});

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

  socket.emit("game:join", { gameCode: gameCode.value, creatorUsername: username.value })
}

socket.on("game:join:error", (game) => {
  joinGameError.value = "Unable to join game"
});

socket.on("game:joined", (game) => {
  router.push({ name: 'lobby', params: { gameCode: game.code } })
});
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

  <Chat />
</template>
