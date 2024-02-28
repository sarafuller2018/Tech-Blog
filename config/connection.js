// import the sequelize lib
const Sequelize = require("sequelize");
// uses dotenv information and sets environment variables to the process.env object
require("dotenv").config();

// creates sequelize as a variable
let sequelize;

// checks to see if app is deployed, will use JAWSDB_URL if exists. if not, uses local machine and dotenv info
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize - new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql"
        }
    );
}

// exports the sequelize connection
module.exports = sequelize;