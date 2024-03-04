// imports blogpost model
const { Comments } = require("../models");

// creates array
const commentsdata = [
    {
        post_date: "March 1, 2023",
        description: "Awesome job",
        user_id: 1,
        blogpost_id: 1,
    },
    {
        post_date: "January 22, 2024",
        description: "Great job",
        user_id: 2,
        blogpost_id: 2,
    },
    {
        post_date: "November 20, 2021",
        description: "Nice take",
        user_id: 3,
        blogpost_id: 3,
    },
    {
        post_date: "March 8, 2020",
        description: "Thanks!",
        user_id: 4,
        blogpost_id: 4,
    },
];

// bulk creates seed data into a variable using the array
const seedComments = () => Comments.bulkCreate(commentsdata);

// exports to allow access
module.exports = seedComments;