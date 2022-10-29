const userService = require('../services/user.service');

const user = async (req, res) => {
  const data = req.body;

  const validBody = await userService.validateBody(data);

  if (validBody.type) {
    return res.status(validBody.type).json({ message: validBody.message });
  }

  return res.status(201).json({ token: validBody.message });
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();

  return res.status(200).json(result.message);
};

module.exports = {
  user,
  getAllUsers,
};