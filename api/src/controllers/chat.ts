import { Server, Socket } from 'socket.io';
import EVENT_TYPES from "../enums/eventTypes.js"

const sendMessage = (data: { gameCode: string; message: string; }, socket: Socket, io: Server): void => {
  io.to(data.gameCode).emit(EVENT_TYPES.CHAT.MESSAGE, { message: data.message })
}

export default { sendMessage }
