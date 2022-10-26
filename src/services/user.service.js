const jwt = require('../utils/jwt.util');

const { User } = require('../models');

const validateDisplayName = (displayName) => {
  const nameMinlength = 8;
  return displayName.length >= nameMinlength;
};

const validatePassword = (password) => {
  const passwordMinLength = 6;
  return password.length >= passwordMinLength;
};

const validateEmail = async (email) => {
  const emailRegex = /[A-z0-9._]+@[a-z]+\.[a-z]{2,3}/;
  const userEmail = await User.findOne({ where: { email } });
  
  if (!userEmail) {
    const result = {
      emailRegex: emailRegex.test(email),
      userEmail: { dataValues: { email: null } },
    };
    return result;   
  }  
  
  const result = {
    emailRegex: emailRegex.test(email),
    userEmail,
  };

  return result;
};

const newToken = (data) => {
  const { password: _, ...dataWithoutPassword } = data;
  const token = jwt.createToken(dataWithoutPassword);
  return token;
};

const registerUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const validateBody = async (data) => {
  const { displayName, email, password, image } = data;

  if (!validateDisplayName(displayName)) {
    return { type: 400, message: '"displayName" length must be at least 8 characters long' };
  }  
  if (!validatePassword(password)) {
    return { type: 400, message: '"password" length must be at least 6 characters long' };
  }
  const { emailRegex, userEmail } = await validateEmail(email);
  if (!emailRegex) {
    return { type: 400, message: '"email" must be a valid email' };
  }
  if (userEmail.dataValues.email === email) {
    return { type: 409, message: 'User already registered' };
  }
  console.log('oi', displayName, email, password, image);

  await registerUser({ displayName, email, password, image });  
  const token = newToken(data);

  return { type: null, message: token };
};

module.exports = {
  validateBody,
};
