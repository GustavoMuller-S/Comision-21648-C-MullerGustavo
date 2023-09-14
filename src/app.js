console.log("Arranca o no arranca??"); 

const express = require('express');
const morgan = require(`morgan`);
const cors = require(`cors`);
const path = require("path");
const { TestConnection, port } = require("./database/database");
const indexRoutes = require("./routes/indexRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

/* MIDDLEWARES */
app.use(express.urlencoded({ extended: false }));
app.use(morgan(`Tiny`));
app.use(cors());
app.use(express.json());

/* ACA SE ROMPE AHORA */

//establecemos la ruta de la carpeta estatica para los archivos css y js publicos
app.set(express.static(path.join(__dirname, "public")));

//motor de vistas de ejs----
app.set("view engine", "ejs");

//establecemos la carpeta views para que encuentre dinamicamente
app.set("views", path.join(__dirname, "views"));

/* DALEEEEEE */


TestConnection();

app.use(indexRoutes);
app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Estamos en Vivo')
})

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
