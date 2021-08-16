const ShippingModel = require("./models/shippings.js");
const dummyData = require("./dummyData");
const dbConection = require("./dbConection");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "./.env" });

const connection = new Sequelize({
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
});
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`)
  .then(async () => {
    await dbConection.sync({ force: false });

    const shippings = await ShippingModel.findAll();

    if (shippings.length == 0) {
      await ShippingModel.bulkCreate(dummyData);
    }
  });
