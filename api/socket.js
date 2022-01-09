import { Server } from 'socket.io'

const setSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.NODE_ENV === "production" ? 'lost-cities-game.io' : process.env.APP_URL,
    }
  });

  io.on('connection', (socket) => {
    socket.on('chat message', msg => {
      io.emit('chat message', msg);
    });
  });

  return server
}

export default setSocket
