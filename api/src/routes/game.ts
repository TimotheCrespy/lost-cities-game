import { Express } from 'express';
import gamesController from '../controllers/games.js'

const setGameRoutes = (app: Express) => {
  app.post('/api/game', gamesController.createGame);
  app.put('/api/game', gamesController.joinGame);

  return app
}

export default setGameRoutes
