require('dotenv/config');
const jwt = require('jsonwebtoken');
// const User = require('../models/User');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = {
  createToken,
  // validateToken,
};
