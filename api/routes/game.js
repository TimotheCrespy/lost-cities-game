import gamesController from '../controllers/games.js'

const setGameRoutes = (app) => {
  app.post('/api/game', gamesController.createGame);

  return app
}

export default setGameRoutes
