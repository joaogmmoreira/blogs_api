const userService = require('../services/user.service');

const user = async (req, res) => {
  const data = req.body;

  const validBody = await userService.validateBody(data);

  if (validBody.type) {
    return res.status(validBody.type).json({ message: validBody.message });
  }

  return res.status(201).json({ token: validBody.message });
};

module.exports = {
  user,
};