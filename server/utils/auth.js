const jwt = require("jsonwebtoken");

const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, `${process.env.SECRET}`, {
        maxAge: expiration,
      });
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }
    return req;
  },

  signToken: function ({ _id, username, email }) {
    const payload = { _id, username, email };
    return jwt.sign({ data: payload }, `${process.env.SECRET}`, {
      expiresIn: expiration,
    });
  },
};
