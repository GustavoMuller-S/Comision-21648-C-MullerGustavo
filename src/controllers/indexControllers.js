const indexControllers = {};

indexControllers.renderIndex = (req, res) => {
  res.render("index", { title: "Pagina Inicio" });
};

module.exports = { indexControllers };