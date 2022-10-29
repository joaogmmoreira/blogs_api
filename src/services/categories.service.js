const { Category } = require('../models');

const validateCategoryRegister = async (data) => {
  const { name } = data;

  if (!name) {
    return { type: 400, message: '"name" is required' };
  }

  const result = await Category.create({ name });
  // console.log(result);

  return { type: null, message: result };
};

const getAllCategories = async () => {
  const result = await Category.findAll();
  // console.log(result);

  return { type: null, message: result };
};

module.exports = {
  validateCategoryRegister,
  getAllCategories,
};