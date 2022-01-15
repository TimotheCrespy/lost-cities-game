<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router";
import Chat from '@/components/Chat.vue'

const route = useRoute()
const gameCode = ref(route.params.gameCode as string)
</script>

<template>
  <h1>Lobby</h1>

  <section>
    <p v-if="gameCode">
      The game code is
      <code>{{ gameCode }}</code>
    </p>
  </section>

  <Chat :game-code="gameCode" />
</template>
