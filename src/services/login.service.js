const jwt = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (email, password) => {
  if (!email || !password) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  return { type: null, message: email, password };
};

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return ({ type: 400, message: 'Invalid fields' });
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;
  console.log(userWithoutPassword);

  const token = jwt.createToken(userWithoutPassword);

  return { type: null, message: token };
};

module.exports = {
  validateBody,
  validateLogin,
};
