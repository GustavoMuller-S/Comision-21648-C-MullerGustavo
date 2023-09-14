const indexControllers = {};

indexControllers.renderIndex = (req, res) => {
  res.render("index", { title: "Pag Inicio" });
};

module.exports = { indexControllers };