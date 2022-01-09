<script setup lang="ts">
import Chat from '@/components/Chat.vue'
import { useRouter } from "vue-router"
import useGameService from "@/composables/useGameService"

const router = useRouter()

const createGame = async () => {
  const game = await useGameService.createGame()
  router.push({ name: 'lobby', params: { gameCode: game.code } })
}

</script>

<template>
  <h1>Home</h1>

  <section>
    <button @click="createGame">Create game</button>
  </section>

  <Chat />
</template>