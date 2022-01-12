<script setup lang="ts">
import Chat from '@/components/Chat.vue'
import { useRouter } from "vue-router"
import useGameService from "@/composables/useGameService"
import { ref } from "vue"

const router = useRouter()

const username = ref("The expeditor")
const createGameError = ref<null | string>(null)

const createGame = async () => {
  if (!username.value) {
    createGameError.value = "Please provide a username"
    return
  }
  const game = await useGameService.createGame(username.value)
  router.push({ name: 'lobby', params: { gameCode: game.code } })
}

const gameCode = ref<null | string>(null)
const joinGameError = ref<null | string>(null)

const joinGame = async () => {
  if (!gameCode.value) {
    joinGameError.value = "Please provide a game code"
    return
  }
  if (gameCode.value.length !== 6) {
    joinGameError.value = "Please provide a 6-letter game code"
    return
  }
  const game = await useGameService.joinGame(gameCode.value, username.value)
  if (!game) {
    joinGameError.value = "Game does not exist"
    return
  }
  router.push({ name: 'lobby', params: { gameCode: game.code } })

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

  <Chat />
</template>