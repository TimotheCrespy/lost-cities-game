import { Request, Response } from 'express';
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

const createGame = (req: Request, res: Response) => {
  const creatorUsername = new Player(req.body.creatorUsername)
  const code = generateUniqueCode(getGameCodes(games))
  const game = new Game(code, creatorUsername)

  games.set(game.code, game)

  res.send(JSON.stringify(game))
}

const joinGame = (req: Request, res: Response) => {
  const opponentUsername = new Player(req.body.opponentUsername)
  const gameCode = req.body.gameCode
  const game = getGameFromCode(gameCode)

  if (!game) {
    res.sendStatus(404);
    return
  }

  game.setOpponent(opponentUsername)

  res.send(JSON.stringify(game))
}

export default { createGame, joinGame }
