const User = require("../models/userModels");
const foroController = {};

/* CARGARIA ACA LOS DATOS DEL USUARIO */
foroController.getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.render("user", { titleUser: "Usuarios", results: users });
};

//TODO: POST: PAGINA DE INICIO
foroController.formCreateUser = (req, res) => {
  res.render("createUser", { titleCreateUser: "Nuevo Usuario" });
};

//PARA CREAR AL USUARIO
foroController.postUser = async (req, res) => {
  const { firstName, email } = req.body;

  //validacion para los datos del body
  if (!firstName || !email)
    return res.status(400).send({
      message: "Por favor ingresar los datos del nombre y apellido del usuario",
    });
   try {
    const user = {
      firstName: firstName,
      email: email,
    };
    if (!user) {
      return res
        .status(409)
        .send({ message: "Usuario ya existe en la base de datos" });
    } else {
      const newUser = await User.create(user);
      return res.redirect("/user");
        }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

//TODO: PUT PAGINA PARA EDITAR USUARIO
foroController.formEditUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id: id } });
  console.log(user);
  res.render("editUser", {
    titleEditUser: "Editar Usuario",
    user: user,
  });
};

foroController.putUser = async (req, res) => {
  const { firstName, email, id } = req.body;
  //validación de que no mande el dato del nombre para actualizar
  if (!firstName || !email) {
    return res.status(404).send({
      message:
        "Es necesario que el parametro firstName o LastName tenga información para actualizar",
    });
  }
  const updateUser = User.update(
    {
      firstName: firstName,
      email: email,
    },
    { where: { id: id } }
  );
  return res.redirect("/user");

};

/* DELETE TODO */

foroController.deleteUser = (req, res) => {
  const { id } = req.params;
  const deleteUser = User.destroy({ where: { id: id } });
  //validacion para saber si ya existe o no en la bd
  if (deleteUser) {
    return res.redirect("/user");
  } else {
return res.status(400)
   .send({ message: "Usuario no existe en la base de datos" })
  }
};

module.exports = { foroController };
