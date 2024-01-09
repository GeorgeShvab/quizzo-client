import { io } from 'socket.io-client'
import { Socket } from 'socket.io-client'

let client: Socket

export const initWebSocket = () => {
  client = io(import.meta.env.VITE_APP_SERVER_ADDRESS, {
    reconnectionDelayMax: 10000,
  })
  return client
}

export const getWebSocket = () => {
  return client
}
