import { Server, Socket } from 'socket.io';
import Game from "../entities/Game.js";
import Player from "../entities/Player.js";
import { generateUniqueCode } from '../utils.js'
import EVENT_TYPES from "../enums/eventTypes.js"

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

  games.set(code, game)

  // Chat
  socket.join(code)

  socket.emit(EVENT_TYPES.GAME.CREATED, game)
}

const joinGame = (data: { gameCode: string, creatorUsername: string; }, socket: Socket): void => {
  const opponentUsername = new Player(data.creatorUsername)
  const gameCode = data.gameCode
  const game = getGameFromCode(gameCode)

  if (!game) {
    socket.emit(EVENT_TYPES.GAME.JOIN_ERROR, game)
    return
  }

  game.setOpponent(opponentUsername)

  // Chat
  socket.join(gameCode)

  socket.emit(EVENT_TYPES.GAME.JOINED, game)
}

export default { createGame, joinGame }
