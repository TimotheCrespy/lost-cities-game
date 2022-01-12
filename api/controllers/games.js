import Game from "../entities/Game.js";

const games = new Map();

const getGameCodes = (games) => {
  return [...games].map((game) => game.code)
}

const getGameFromCode = (gameCode) => {
  return games.get(gameCode)
}

const createGame = (req, res) => {
  const game = new Game()
  game.generateCode(getGameCodes(games))

  games.set(game.code, game)

  res.send(JSON.stringify(game))
}

const joinGame = (req, res) => {
  const gameCode = req.body.gameCode
  const game = getGameFromCode(gameCode)

  res.send(JSON.stringify(game))
}

export default { createGame, joinGame }