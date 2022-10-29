require('dotenv/config');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
 
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = jwt.verify(authorization, process.env.JWT_SECRET);
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
