import { io } from 'socket.io-client';

// const BACKEND_URL =
//   (process.env.EXPO_PUBLIC_BACKEND_URL as string) || 'https://kdbvglw2-3000.asse.devtunnels.ms/'; // Temporary address of the backend
const BACKEND_URL = 'https://kdbvglw2-3000.asse.devtunnels.ms/'; // Temporary address of the backend

const socket = io(BACKEND_URL, {
  transports: ['websocket'],
  reconnection: true,
});

export default socket;
