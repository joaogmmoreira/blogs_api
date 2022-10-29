const express = require('express');
const postController = require('../controllers/post.controller');
const tokenMiddleware = require('../middlewares/token.middleware');

const router = express.Router();

router.get('/', tokenMiddleware.validateToken, postController.getAllPosts);

module.exports = router;