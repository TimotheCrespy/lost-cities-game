<script setup lang="ts">
import { io } from "socket.io-client";
import { ref, onMounted } from 'vue'

const gameCode = ref<null | string>(null)

const socket = io(import.meta.env.VITE_API_URL);

onMounted(() => {
  console.log('generateGameCode()')
})

</script>

<template>
  <h1>Lobby</h1>

  <section>
    <p v-if="gameCode">
      Your game code is
      <code>{{ gameCode }}</code>
    </p>
  </section>
</template>
