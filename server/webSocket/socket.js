const socketIO = require("socket.io");
const connection = require("../config/db.config");

const socket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("(WebSocket) Connetion Established");
    socket.on("NewMessage", (data) => {
      connection.query(
        `select * from conversetions where userName="${data.sender}"`,
        (err, result) => {
          if (result.length === 0) {
            connection.query(
              `insert into conversetions values ("${data.sender}","${data.message}");`
            );
          } else {
            connection.query(
              `UPDATE conversetions SET lastMessage="${data.message}"  WHERE userName="${data.sender}";`
            );
          }
        }
      );
      connection.query(
        `insert into chats values ("${data.sender}","${data.reciver}","${data.message}");`
      );
      socket.broadcast.emit("ReceiveMessage", data);
    });
  });
  return io;
};
module.exports = socket;
