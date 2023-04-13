const express = require("express");
const router = express.Router();
const connection = require("../config/db.config");

router.get("/:userEmail", (req, res) => {
  const { userEmail } = req.params;

  connection.query(
    `select * from chats where sender="${userEmail}" or reciver="${userEmail}"`,
    (err, data) => {
      res.send(data);
    }
  );
});

router.get("/conversations/:userEmail", (req, res) => {
  const { userEmail } = req.params;
  if (userEmail === "sohamganmote@gmail.com") {
    connection.query(`select * from conversetions;`, (err, data) => {
      res.send(data);
    });
  }
});

router.get("/privateChats/:sender/:reciver", (req, res) => {
  const { sender, reciver } = req.params;
  connection.query(
    `select * from chats where sender="${sender}" and reciver="${reciver}" or sender="${reciver}" and reciver="${sender}";`,
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
