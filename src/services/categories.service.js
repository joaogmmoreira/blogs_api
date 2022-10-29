const { Category } = require('../models');

const validateCategoryRegister = async (data) => {
  const { name } = data;

  if (!name) {
    return { type: 400, message: '"name" is required' };
  }

  console.log(Category);
  const result = await Category.create({ name });

  return { type: null, message: result };
};

const getAllCategories = async () => {
  console.log(Category);
  const result = await Category.findAll();

  return { type: null, message: result };
};

module.exports = {
  validateCategoryRegister,
  getAllCategories,
};