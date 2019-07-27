const jwt = require("jsonwebtoken");

const secret = require("../config/secrets.js");

module.exports = {
  restrict
};

function restrict(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.jwtToken = decodedToken;  // this may need to be deleted
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
}
