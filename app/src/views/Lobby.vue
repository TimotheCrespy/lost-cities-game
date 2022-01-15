<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
import Chat from '@/components/Chat.vue'
import socket from '../composables/socket'
import EVENT_TYPES from "../enums/eventTypes"
import { useGameStore } from '@/store/game'

const route = useRoute()
const router = useRouter()
const gameStore = useGameStore()

const gameCode = ref(route.params.gameCode as string)

socket.on(EVENT_TYPES.GAME.JOINED, (data: { game: Game }) => {
  gameStore.setOpponent(data.game.opponent as Player)
});

socket.on(EVENT_TYPES.GAME.STARTED, (data: { gameCode: string }) => {
  router.push({ name: 'game-board', params: { gameCode: data.gameCode } })
});

const startGame = () => {
  socket.emit(EVENT_TYPES.GAME.START, { gameCode: gameCode.value })
}
</script>

<template>
  <h1>Lobby</h1>

  <section>
    <p v-if="gameCode">
      The game code is
      <code>{{ gameCode }}</code>
    </p>
  </section>

  <section>
    <p>
      <strong>{{ gameStore.creator.username }}</strong> vs
      <strong v-if="gameStore.opponent">{{ gameStore.opponent.username }}</strong>
      <strong v-else>Waiting for opponent</strong>
    </p>
  </section>

  <section v-if="gameStore.isFullOfPlayers && gameStore.isCurrentUserCreator">
    <div>
      <button @click="startGame">Start game</button>
    </div>
  </section>

  <Chat :game-code="gameCode" />
</template>
