const app = require('express')();
const cors = require('cors')
console.log(__dirname + '/../.env');
app.use(cors())
const http = require('http').Server(app);
require('dotenv').config({ path: '../.env' })
console.log(process.env);

const io = require('socket.io')(http, {
  cors: {
    origin: process.env.NODE_ENV === "production" ? 'lost-cities-game.io' : process.env.APP_URL,
  }
});
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});