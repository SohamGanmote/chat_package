const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const socket = require("./webSocket/socket");
const server = http.createServer(app);
socket(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/chats", require("./routes/chatsRoutes"));
server.listen(8080, () => {
  console.log("PORT : 8080");
});
