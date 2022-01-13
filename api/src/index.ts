import express from 'express'
const app = express()
import cors from 'cors'
app.use(cors())
import http from 'http'
const server = new http.Server(app)
import dotenv from 'dotenv'
const DOTENV_PATH = '../.env'
dotenv.config({ path: DOTENV_PATH })

// Allow usage of "body" in POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import setGameRoutes from './routes/game.js'
setGameRoutes(app)

import setSocket from './socket.js'
setSocket(server)

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
