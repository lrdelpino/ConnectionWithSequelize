const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });

module.exports = new Sequelize({
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
});

/*new Sequelize("test_bd", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});*/
