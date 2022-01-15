import { RouterOptions } from 'vue-router'
import Home from '@/views/Home.vue'
import Lobby from '@/views/Lobby.vue'
import Board from '@/views/Board.vue'

const routes: RouterOptions["routes"] = [
  { path: '/', name: 'home', component: Home },
  { path: '/game/lobby/:gameCode', name: 'game-lobby', component: Lobby },
  { path: '/game/board/:gameCode', name: 'game-board', component: Board },
]

export default routes
