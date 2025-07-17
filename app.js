const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

try {
  const apiRoutes = require("./src/routes/api");
  app.use("/api", apiRoutes);
} catch (error) {
  console.error("Error con las rutas", error.message);
}

app.use("*", (req, res) => {
  res.status(404).json({ error: "Ruta Inexistente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
