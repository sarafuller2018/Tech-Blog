// imports models
const User = require("./User");
const BlogPost = require("./BlogPost");

// sets up relationships between models
User.hasMany(BlogPost, {
    foreignKey: "user_id",
});

BlogPost.belongsTo(User, {
    foreignKey: "user_id",
});

// exports to allow access
module.exports = { User, BlogPost };