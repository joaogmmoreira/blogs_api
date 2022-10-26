module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: 'PostCategories',
    timestamps: false,
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', 
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    })

    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'category_id',
      otheKey: 'post_id',
      through: PostCategory,
    })
  }
  return PostCategory;
}