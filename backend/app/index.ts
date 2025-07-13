import mongoose from "mongoose";
import server from "./app";
import { initSocket } from "./services/socket";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port 3000 or http://localhost:${PORT}`);
      initSocket(server);
    });
  })
  .catch((err) => {
    console.log(`Database connection error : ${err}`);
  });
