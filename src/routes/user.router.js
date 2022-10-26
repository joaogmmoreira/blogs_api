const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/', userController.user);
// router.post('/:id', userController.user);

module.exports = router;