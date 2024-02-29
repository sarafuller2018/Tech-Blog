// imports required packages/folders to server
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

// imports sequelize to server
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store); // ?

// imports express to server 
const app = express();
const PORT = process.env.PORT || 3001;

// creates session data
const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// setting up the session for use by server
app.use(session(sess));

// setting up handlebars for use by server
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

// setting up routes for use by server
app.use(routes);

// sync sequelize models to the database, then turn on the server
// .then is the same as async and await
// connects to database through sequelize then it runs the port
// false means do not delete database
// true means connect to database but drops data in the database, this will make you start with nothing 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}!`));
});