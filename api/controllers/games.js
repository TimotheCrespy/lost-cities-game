import Game from "../entities/Game.js";

const games = new Map();

const getGameCodes = (games) => {
  return [...games].map((game) => game.code)
}

const createGame = (req, res) => {
  const game = new Game()
  game.generateCode(getGameCodes(games))

  res.send(JSON.stringify(game))
}

export default { createGame }