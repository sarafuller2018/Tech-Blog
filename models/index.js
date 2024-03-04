// imports models
const User = require("./User");
const BlogPost = require("./BlogPost");
const Comments = require("./Comments");

// sets up relationships between models
User.hasMany(BlogPost, {
    foreignKey: "user_id",
});

BlogPost.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Comments, {
    foreignKey: "user_id",
});

Comments.belongsTo(User, {
    foreignKey: "user_id",
});

BlogPost.hasMany(Comments, {
    foreignKey: "blogpost_id",
});

Comments.belongsTo(BlogPost, {
    foreignKey: "blogpost_id",
});

// exports to allow access
module.exports = { User, BlogPost, Comments };