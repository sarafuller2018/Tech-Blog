// import required packages and files
const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedBlogPost = require("./blogPostData");
const seedComments = require("./commentsData")

// creates an async/await function to seed all of the application data
const seedAll = async () => {
    // connects to your database before seeding
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBlogPost();

    await seedComments();

    // stops the connection from the database
    process.exit(0);
};

seedAll();