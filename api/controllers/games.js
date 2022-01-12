import Game from "../entities/Game.js";
import Player from "../entities/Player.js";
import { generateUniqueCode } from '../utils.js'

const games = new Map();

const getGameCodes = (games) => {
  return [...games].map((game) => game.code)
}

const getGameFromCode = (gameCode) => {
  return games.get(gameCode)
}

const createGame = (req, res) => {
  const creatorUsername = new Player(req.body.creatorUsername)
  const game = new Game(creatorUsername)
  const code = generateUniqueCode(getGameCodes(games))
  game.setCode(code)

  games.set(game.code, game)

  res.send(JSON.stringify(game))
}

const joinGame = (req, res) => {
  const opponentUsername = new Player(req.body.opponentUsername)
  const gameCode = req.body.gameCode
  const game = getGameFromCode(gameCode)
  game.setOpponent(opponentUsername)

  res.send(JSON.stringify(game))
}

export default { createGame, joinGame }