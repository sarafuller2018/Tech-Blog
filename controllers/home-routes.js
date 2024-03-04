const router = require('express').Router();
const { BlogPost, Comments, User } = require('../../models');

// The `/` endpoint

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
                    attributes: ["post_date", "descrption", "user_id"]
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
        res.render("homepage", {
            blogposts,
            loggedIn: req.session.loggedIn,
        });
        // i dont think i need this: res.status(200).json(blogPostData);
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
                    attributes: ["post_date", "descrption", "user_id"]
                },
                {
                    model: User,
                    attributes: ["username"]
                },
            ],
        });

        const blogpost = blogPostData.get({ plain: true });
        res.render("blogpost", {
            blogpost,
            loggedIn: req.session.loggedIn
        });
        // res.status(200).json(blogPostData);
    } catch (err) {
        //allows you to see error in terminal instead of just the number
        console.log(err);
        res.status(500).json(err);
    }
});

// login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

module.exports = router;