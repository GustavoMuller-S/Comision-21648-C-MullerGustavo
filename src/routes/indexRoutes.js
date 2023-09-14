/* SE DEBERIA MOSTRAR EL INDEX Q VIENE DEL indexControllers.js */

const indexRoutes = require("express").Router();
const { indexControllers } = require("../controllers/indexControllers");

indexRoutes.get("/", indexControllers.renderIndex);

module.exports = indexRoutes;