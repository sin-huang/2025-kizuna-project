const express = require("express");
const cors = require("cors");
const passport = require("./config/passport.js");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

// 以下為即時聊天室新增模組
const http = require("http");
const { Server } = require("socket.io");
const setupSocket = require("./controllers/chatControllers.js");


dotenv.config();

const app = express();
// 讓 express 和 socket.io 共用一個 server
const server = http.createServer(app);
const io = new Server(server, {cors:{origin:"*"}});

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// 掛載 API router
app.use("/auth", authRoutes);
app.use("/recommendations", recommendationRoutes)

// // 啟用 socket.io 聊天室邏輯
// setupSocket(io);

server.listen(3000, () =>
  console.log("✅ Server with Socket.io running on http://localhost:3000")
);
