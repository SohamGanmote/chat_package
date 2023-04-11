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

module.exports = router;
