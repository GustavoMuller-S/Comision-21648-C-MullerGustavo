console.log("Arranca o no arranca??"); 

const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const morgan = require(`morgan`);
const cors = require(`cors`);
const path = require("node:path");
const { TestConnection, port } = require("./database/database");
const indexRoutes = require("./routes/indexRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT;

const app = express();

/* MIDDLEWARES */
app.use(express.urlencoded({ extended: false }));
app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());


//establecemos la ruta de la carpeta estatica para los archivos css y js publicos
app.set(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

/* DALEEEEEE */


TestConnection();

app.use(indexRoutes);
app.use(userRoutes);

/* app.get('/', (req, res) => {
  res.send('Estamos en Vivo')
}) */

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
