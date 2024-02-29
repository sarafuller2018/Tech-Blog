// import required packages and files
const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedBlogPost = require("./blogPostData");

// creates an async/await function to seed all of the application data
const seedAll = async () => {
    //what does this do?????????
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBlogPost();

    //what does this do?????????
    process.exit(0);
};

seedAll();