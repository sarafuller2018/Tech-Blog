// APIs alter the database that is why it is set in a different folder

// imports packages and files
const router = require("express").Router();
const { BlogPost } = require("../../models");

// CREATE a new blogpost
router.post("/", async (req, res) => {
    try {
        // wait for user to input and create blog post info
        const newPostInfo = await BlogPost.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id
        });
        res.status(200).json(newPostInfo);

        // catches and displays any errors
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// UPDATE a blogpost -- fix formatting ????
router.put("/:id", async (req, res) => {
    BlogPost.update(
        {
            title: req.body.title,
            description: req.body.description
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedBlogPost) => {
            res.json(updatedBlogPost);
        })

        // catches and displays any errors
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete(":/id", async (req, res) => {
    try {
        const blogpostData = await BlogPost.destroy({
                where: {
                    id: req.params.id,
                },
        });

        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;