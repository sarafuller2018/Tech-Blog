const router = require('express').Router();

// imports the routes to make modular
const userRoutes = require("./user-routes");
const commentRoutes = require("./comments-routes");
const blogpostRoutes = require("./blogpost-routes");

// when a request is made to the /users, /blogposts, or /comments path, it will be directed to the index.js in the /users or /projects folder
router.use("/users", userRoutes);
router.use("/blogposts", blogpostRoutes);
router.use("/comments", commentRoutes);

module.exports = router;