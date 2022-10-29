const categoriesService = require('../services/categories.service');

const categoryRegister = async (req, res) => {
  const data = req.body;

  const result = await categoriesService.validateCategoryRegister(data);

  if (result.type) {
    return res.status(result.type).json({ message: result.message });
  }

  return res.status(201).json(result.message);
};

const getAllCategories = async (_req, res) => {
  const result = await categoriesService.getAllCategories();
  // console.log(result);

  if (result.type) {
    return res.status(result.type).json(result.message);
  }

  return res.status(200).json(result.message);
};

module.exports = {
  categoryRegister,
  getAllCategories,
};