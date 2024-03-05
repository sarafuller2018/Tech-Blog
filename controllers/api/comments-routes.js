// APIs alter the database that is why it is set in a different folder

// imports packages and files
const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth")

// CREATE a new comment
router.post("/", async (req, res) => {
    try {
        // wait for user to input and create new comment
        const newComment = await Comments.create({
            description: req.body.description,
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);

        // catches and displays any errors
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;