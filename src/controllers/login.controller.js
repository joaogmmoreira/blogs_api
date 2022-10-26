const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;

  const validBody = loginService.validateBody(email, password);

  if (validBody.type) {
    return res.status(400).json({ message: validBody.message });
  }
  
  const validLogin = await loginService.validateLogin(email, password);

  if (validLogin.type) {
    return res.status(validLogin.type).json({ message: validLogin.message });
  }

  return res.status(200).json({ token: validLogin.message });
};

module.exports = {
  login,
};