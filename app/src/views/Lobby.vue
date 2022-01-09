<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router";
import { io } from "socket.io-client";

const route = useRoute()
const gameCode = ref(route.params.gameCode as string)
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
