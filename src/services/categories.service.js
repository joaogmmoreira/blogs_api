const category = require('../models/Category');

const validateCategoryRegister = (data) => {
  const { name } = data;

  if (!name) {
    return { type: 400, message: '"name" is required' };
  }

  const result = category.findOne(data);
  console.log(result);

  return result;
};

// const validateBody = async (data) => {
//   const { displayName, email, password, image } = data;

//   if (!validateDisplayName(displayName)) {
//     return { type: 400, message: '"displayName" length must be at least 8 characters long' };
//   }  
//   if (!validatePassword(password)) {
//     return { type: 400, message: '"password" length must be at least 6 characters long' };
//   }
//   const { emailRegex, userEmail } = await validateEmail(email);
//   if (!emailRegex) {
//     return { type: 400, message: '"email" must be a valid email' };
//   }
//   if (userEmail.dataValues.email === email) {
//     return { type: 409, message: 'User already registered' };
//   }

//   await registerUser({ displayName, email, password, image });  
//   const token = newToken(data);

//   return { type: null, message: token };
// };

module.exports = {
  validateCategoryRegister,
};