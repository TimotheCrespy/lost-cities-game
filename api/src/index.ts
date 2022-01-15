import express from 'express'
const app = express()
import cors from 'cors'
app.use(cors())
import { createServer } from "http";
const server = createServer(app)
import dotenv from 'dotenv'
const DOTENV_PATH = '../.env'
dotenv.config({ path: DOTENV_PATH })

import initIo from './io.js'
initIo(server)

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
