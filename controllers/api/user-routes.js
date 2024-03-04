// APIs alter the database that is why it is set in a different folder
// imports packages and files
// only need to create a session when sign in or sign up
const router = require("express").Router();
const { User } = require("../../models");

// CREATE a new user
router.post("/", async (req, res) => {
    try {
        // wait for user to input and create new user info
        const dbUserInfo = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        
        // saving info to the session
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserInfo.id;

            res.status(200).json(dbUserInfo);
        });

    // catches and displays any errors
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        // finds a user that matches email entered and stores into variable
        const dbUserInfo = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        // if there is no matching email, display an error message
        if (!dbUserInfo) {
            res.status(400);
            res.json({ message: "Incorrect email or password. Please try again!" });
            return;
        }
        
        // checks the user password using the method created in the model
        const validateUserPassword = await dbUserInfo.checkPassword(req.body.password);

        // if the password is incorrect, display error message
        if (!validateUserPassword) {
            res.status(400);
            res.json({ message: "Incorrect email or password. Please try again!" });
            return;
        }

        // cookies save small info from the user
        // can use it to authenticate/save settings, etc.
        req.session.save(() => {
            req.session.loggedIn = true;
            console.log("File: user-routes.js ~ line 56 ~ req.session.save ~ req.session.cookie", req.session.cookie);
        
            res.status(200);
            res.json({ user: dbUserInfo, message: "Nice! You are logged in."})
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGOUT
router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;