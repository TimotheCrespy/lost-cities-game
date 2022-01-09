<script setup lang="ts">
import { io } from "socket.io-client";
import Chat from '@/components/Chat.vue'
import { useRouter } from "vue-router"

const router = useRouter()

const createGame = () => {
  router.push({ name: 'lobby' })
}

</script>

<template>
  <h1>Home</h1>

  <section>
    <button @click="createGame">Create game</button>
  </section>

  <Chat />
</template>