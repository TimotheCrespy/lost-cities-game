export default class Game {
  code
  creator
  opponent

  constructor(player) {
    this.creator = player
  }
  setCode(code) {
    this.code = code
  }
  setOpponent(player) {
    if (this.creator.username == player.username) {
      player.setUsername(`${player.username}-bis`)
    }
    this.opponent = player
  }
}