const userRoutes = require("express").Router();
const { userControllers } = require("../controllers/userControllers");
const User = require("../models/userModels");

//ruta GET INDEX
/* userRoutes.get("/user", userControllers.indexUsers); */

//ruta GET ALL USERS
userRoutes.get("/user", userControllers.getAllUsers);

//ruta GET USER BY ID
// userRoutes.get("/user/:id", controllerUsers.getUserById);

//ruta POST (crear usuario)
userRoutes.get("/createUser", userControllers.formCreateUser);
userRoutes.post("/saveUser", userControllers.postUser);

//ruta PUT (actualizar al usuario)
userRoutes.get("/editUser/:id", userControllers.formEditUser);
userRoutes.post("/updateUser", userControllers.putUser);

//ruta DELETE (eliminar)
userRoutes.get("/deleteUser/:id", userControllers.deleteUser);

module.exports = userRoutes;