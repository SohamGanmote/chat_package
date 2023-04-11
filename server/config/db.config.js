const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "chat_package",
  password: "password",
  port: 3306,
});

module.exports = connection;
