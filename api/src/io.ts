import { Server as HttpServer } from 'http';
import { Server } from 'socket.io'
import gamesController from './controllers/games.js'

let io: Server = new Server()

const initIo = (httpServer: HttpServer): void => {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.NODE_ENV === "production" ? 'lost-cities-game.io' : process.env.APP_URL,
    }
  });

  io.on('connection', (socket) => {
    socket.on("game:create", (data) => gamesController.createGame(data, socket))
    socket.on("game:join", (data) => gamesController.joinGame(data, socket))
  });
}

export default initIo
