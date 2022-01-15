import { Socket } from 'socket.io';
import Game from "../entities/Game.js";
import Player from "../entities/Player.js";
import { generateUniqueCode } from '../utils.js'

const games = new Map<string, Game>();

const getGameCodes = (games: Map<string, Game>): string[] => {
  return [...games.values()].map((game) => game.code)
}

const getGameFromCode = (gameCode: string): Game | undefined => {
  return games.get(gameCode)
}

const createGame = (data: { creatorUsername: string; }, socket: Socket): void => {
  const creatorUsername = new Player(data.creatorUsername)
  const code = generateUniqueCode(getGameCodes(games))
  const game = new Game(code, creatorUsername)

  games.set(game.code, game)

  socket.emit("game:created", game)
}
const joinGame = (data: { gameCode: string, creatorUsername: string; }, socket: Socket): void => {
  const opponentUsername = new Player(data.creatorUsername)
  const game = getGameFromCode(data.gameCode)

  if (!game) {
    socket.emit("game:join:error", game)
    return
  }

  game.setOpponent(opponentUsername)

  socket.emit("game:joined", game)
}

export default { createGame, joinGame }
