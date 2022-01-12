import gamesController from '../controllers/games.js'

const setGameRoutes = (app) => {
  app.post('/api/game', gamesController.createGame);
  app.put('/api/game', gamesController.joinGame);

  return app
}

export default setGameRoutes
