// imports user model
const { User } = require("../models");

// creates array
const userdata = [
    {
        username: "Sara123",
        email: "sara123@hotmail.com",
        password: "password12345"
      },
      {
        username: "Ziggy123",
        email: "ziggy123@hotmail.com",
        password: "password12345"
      },
      {
        username: "Kelsey123",
        email: "kelsey123@hotmail.com",
        password: "password12345"
      },
      {
        username: "Avery123",
        email: "avery123@hotmail.com",
        password: "password12345"
      },
];

// bulk creates seed data into a variable using the array
const seedUser = () => User.bulkCreate(userdata, { individualHooks: true, returning: true }); // use hook individually

// exports to allow access
module.exports = seedUser;