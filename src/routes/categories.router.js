const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const tokenMiddleware = require('../middlewares/token.middleware');

const router = express.Router();

router.post('/', tokenMiddleware.validateToken, categoriesController.categoryRegister);

module.exports = router;