/* SE DEBERIA MOSTRAR EL INDEX Q VIENDE DEL indexControllers.js */

const indexRoutes = require("express").Router();
const { indexControllers } = require("../controllers/index.controllers");

indexRoutes.get("/", indexControllers.renderIndex);

module.exports = indexRoutes;