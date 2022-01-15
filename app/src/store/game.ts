import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    code: null as unknown as string,
    creator: null as unknown as Player,
    isCurrentUserCreator: false,
    opponent: null as unknown as Player,
  }),
  getters: {
    isCreator: (state) => state.creator && state.isCurrentUserCreator,
    isFullOfPlayers: (state) => state.creator && state.opponent,
  },
  actions: {
    initGame(code: string, creator: Player, isCurrentUserCreator = false) {
      this.code = code
      this.creator = creator
      this.isCurrentUserCreator = isCurrentUserCreator
    },
    setOpponent(opponent: Player) {
      this.opponent = opponent
    }
  }
})
