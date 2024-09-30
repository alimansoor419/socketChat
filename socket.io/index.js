import express from "express";
import http from "http";
import { Server } from "socket.io";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3030;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const _dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(join(_dirname, "/public/index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
