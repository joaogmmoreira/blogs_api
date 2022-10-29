const postService = require('../services/post.service');

const getAllPosts = async (_req, res) => {
  const result = await postService.getAllPosts();

  return res.status(200).json(result);
};

module.exports = {
  getAllPosts,
};
