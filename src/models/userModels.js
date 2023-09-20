const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const User = sequelize.define( "User",
// SE DEFINEN MODELOS DE ATRIBUTOS
  {  
    firstName: {/* nombre del q postea */
      type: DataTypes.STRING,
    },
    dataTitle: {/* titulo de post */
      type: DataTypes.STRING,
    }, 
    dataUser: {/* deberia almacenar el post del usuario */
      type: DataTypes.STRING,
    },
    clienteLink: {/* deberia almacenar la imagen del post del usuario */
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
console.log("HASTA ACA ANDA") 
module.exports = User;