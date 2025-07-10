import { Server as HttpServer } from "http";
import { Server as IOServer, Socket } from "socket.io";

let io: IOServer | null = null;

export const initSocket = (server: HttpServer) => {
  io = new IOServer(server, {
    cors: {
      origin: ["*", process.env.FRONTEND_URL as string], // URL of frontend app
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket: Socket) => {
    const userId = socket.handshake.query.userId as string;
    console.log(`🔌 New client connected: ${userId}`);

    if (userId) {
      socket.join(userId);
    }

    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${userId}`);
    });
  });
};

export const getIO = (): IOServer => {
  if (!io) throw new Error("Socket.io not initialized!");
  return io;
};
