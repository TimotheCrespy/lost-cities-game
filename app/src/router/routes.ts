import { RouterOptions } from 'vue-router'
import Home from '@/views/Home.vue'
import Lobby from '@/views/Lobby.vue'

const routes: RouterOptions["routes"] = [
  { path: '/', name: 'home', component: Home },
  { path: '/lobby', name: 'lobby', component: Lobby },
]

export default routes