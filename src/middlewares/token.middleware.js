require('dotenv/config');
const jwt = require('../utils/jwt.util');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
 
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  // const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
  // continuar daqui;
  
  const user = jwt.validateToken(authorization);

  req.user = user;

  next();
};

module.exports = {
  validateToken,
};
