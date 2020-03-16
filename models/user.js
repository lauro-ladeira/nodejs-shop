const Sequelize = require("sequelize");

const sequelize = require("../util/database"); // ambiente de desenvolvimento sequelize, tem a conexao com nossa pool + features seq

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User