// APIs alter the database that is why it is set in a different folder

// imports packages and files
const router = require("express").Router();
const { BlogPost, Comments, User } = require("../../models");
const withAuth = require("../../utils/auth")

// get all blogposts
// find all blogposts
// includes its associated User and Comments data
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
        res.render("blogpost", {
            blogposts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        // allows you to see error in terminal instead of just the number
        console.log(err);
        res.status(500).json(err);
    }
});

// get one blogpost
// find a single blogpost by its `id`
// include its associated User and Comments data
router.get('/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: Comments,
                    attributes: ["post_date", "description", "user_id"],
                    include: [{ model: User, attributes: ["username"]}]
                },
                {
                    model: User,
                    attributes: ["username"]
                },
            ],
        });

        const blogpost = blogPostData.get({ plain: true });
        console.log("this is blogpost", blogpost);
console.log(blogpost.comments);
        res.render("blogpost", {
            blogpost,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        //allows you to see error in terminal instead of just the number
        console.log(err);
        res.status(500).json(err);
    }
});

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

// UPDATE a blogpost
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