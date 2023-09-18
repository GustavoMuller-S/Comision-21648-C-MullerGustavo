const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const User = sequelize.define(
  "User",
// SE DEFINEN MODELOS DE ATRIBUTOS
  {  
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    dataUser: {
      type: DataTypes.STRING,
    },
    clienteLink: {
      type: DataTypes.STRING,
    validate: {
      isUrl: true,
      },
      },
  },
  {
    timestamps: true,
  }
);


console.log(User === sequelize.models.User); 
module.exports = User;