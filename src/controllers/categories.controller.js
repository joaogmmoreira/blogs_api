const categoriesService = require('../services/categories.service');

const categoryRegister = (req, res) => {
  const data = req.body;

  const result = categoriesService.validateCategoryRegister(data);

  if (result.type) {
    return res.status(result.type).json({ message: result.message });
  }

  return result;
};

module.exports = {
  categoryRegister,
};