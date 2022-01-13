import { Server as HttpServer } from 'http';
import { Server } from 'socket.io'

const setSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: process.env.NODE_ENV === "production" ? 'lost-cities-game.io' : process.env.APP_URL,
    }
  });

  io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

  return httpServer
}

export default setSocket
