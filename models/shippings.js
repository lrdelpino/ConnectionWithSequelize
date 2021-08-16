const dbConection = require("../dbConection");
const { Sequelize } = require("sequelize");
const Model = dbConection.define("shipping", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer: Sequelize.STRING(100),
  descrip: Sequelize.TEXT,
  status: Sequelize.STRING(10),
  origin_lat: Sequelize.DECIMAL(11, 8),
  origin_long: Sequelize.DECIMAL(11, 8),
  current_lat: Sequelize.DECIMAL(11, 8),
  current_long: Sequelize.DECIMAL(11, 8),
  end_lat: Sequelize.DECIMAL(11, 8),
  end_long: Sequelize.DECIMAL(11, 8),
});

module.exports = Model;
