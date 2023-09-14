const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const User = sequelize.define(
  "User",
  {
    // SE DEFINEN MODELOS DE ATRIBUTOS
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


console.log(User === sequelize.models.User); 
module.exports = User;