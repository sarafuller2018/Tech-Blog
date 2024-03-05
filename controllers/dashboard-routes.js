const router = require('express').Router();
const { BlogPost, Comments, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        // makes it wait until you find all the category data to avoid errors 
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: Comments,
                    attributes: ["post_date", "description", "user_id"]
                },
                {
                    model: User,
                    attributes: ["username"]
                },
            ],
        });

        const blogposts = blogPostData.map((blogpost) =>
            blogpost.get({ plain: true })
        );
        res.render("dashboard", {
            blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        // allows you to see error in terminal instead of just the number
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;