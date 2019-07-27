const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../data/dbConfig.js");
const secret = require("../config/secrets.js");

const Users = require("./usersModel.js");

router.post("/", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  if (req.body.username && req.body.password && req.body.email) {
    Users.add(user)
      .then(saved => {
        res.status(200).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(422).json({ message: "Input fields are missing" });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Missing username or password or both" });
  }
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `User ${user.username} in da house`,
          userId: `${user.id}`,
          token: `${token}`
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
