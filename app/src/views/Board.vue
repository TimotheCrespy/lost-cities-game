<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from "vue-router";
import Chat from '@/components/Chat.vue'
import socket from '../composables/socket'
import EVENT_TYPES from "../enums/eventTypes"
import { useGameStore } from '@/store/game'

const route = useRoute()
const gameStore = useGameStore()

const gameCode = ref(route.params.gameCode as string)

socket.on(EVENT_TYPES.GAME.JOINED, (game: Game) => {
  gameStore.setOpponent(game.opponent as Player)
});
</script>

<template>
  <h1>Board</h1>

  <section>
    <p>
      The game code is
      <code>{{ gameCode }}</code>
    </p>
  </section>

  <Chat :game-code="gameCode" />
</template>
