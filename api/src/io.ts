import { Server as HttpServer } from 'http';
import { Server } from 'socket.io'
import gamesController from './controllers/games.js'
import chatController from './controllers/chat.js'
import EVENT_TYPES from "./enums/eventTypes.js"

let io: Server = new Server()

const initIo = (httpServer: HttpServer): void => {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.NODE_ENV === "production" ? 'lost-cities-game.io' : process.env.APP_URL,
    }
  });

  io.on('connection', (socket) => {
    socket.on(EVENT_TYPES.GAME.CREATE, (data) => gamesController.createGame(data, socket))
    socket.on(EVENT_TYPES.GAME.JOIN, (data) => gamesController.joinGame(data, socket))

    socket.on(EVENT_TYPES.CHAT.MESSAGE, (data) => chatController.sendMessage(data, socket, io))
  });
}

export default initIo
