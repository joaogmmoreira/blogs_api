const express = require('express');
const userController = require('../controllers/user.controller');
const tokenMiddleware = require('../middlewares/token.middleware');

const router = express.Router();

router.post('/', userController.user);
router.get('/', tokenMiddleware.validateToken, userController.getAllUsers);
router.get('/:id', tokenMiddleware.validateToken, userController.findUser);

module.exports = router;