// imports blogpost model
const { BlogPost } = require("../models");

// creates array
const blogpostdata = [
    {
        title: "HTML Tips",
        post_date: "March 1, 2023",
        description: "Be sure to use semantic elements when creating HTML code.",
        user_id: 1,
    },
    {
        title: "SQL Applications",
        post_date: "January 22, 2024",
        description: "Always make sure you are in the correct database before testing code.",
        user_id: 2,
    },
    {
        title: "Debugging",
        post_date: "November 20, 2021",
        description: "Use console.log often to help debug your application.",
        user_id: 3,
    },
    {
        title: "File Structure",
        post_date: "March 8, 2020",
        description: "Follow the MVC paradigm when deciding how to structure your files.",
        user_id: 4,
    },
];

// bulk creates seed data into a variable using the array
const seedBlogPost = () => BlogPost.bulkCreate(blogpostdata);

// exports to allow access
module.exports = seedBlogPost;