const express = require("express");
const router = express.Router();
const connection = require("../config/db.config");

// login Routes
router.post("/login", (req, res) => {
  const { email, pass } = req.body;

  connection.query(
    `select * from users where userEmail="${email}" AND userPass="${pass}";`,
    (err, data) => {
      res.send(data);
    }
  );
});

// signup Routes
router.post("/signup", (req, res) => {
  const { name, email, pass } = req.body;

  connection.query(
    `insert into users (userName,userEmail,userPass) values ("${name}","${email}","${pass}");`,
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
