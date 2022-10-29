const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  console.log(result);

  return result;
};

module.exports = {
  getAllPosts,
};
