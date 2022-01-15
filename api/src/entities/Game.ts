import Player from "./Player"

export default class Game {
  code: string
  creator: Player
  opponent?: Player

  constructor(code: string, player: Player) {
    this.code = code
    this.creator = player
  }
  setOpponent(player: Player) {
    if (this.creator.username == player.username) {
      player.setUsername(`${player.username} bis`)
    }
    this.opponent = player
  }
}
