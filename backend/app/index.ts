import server from "./app";

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port 3000 or https://localhost:${3000}`);
});
