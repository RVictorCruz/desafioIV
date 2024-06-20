const express = require("express");
const infoRoutes = require("./routes/infoRoutes");

const app = express();
const port = 3000;

app.use(express.json());

// Usar as rotas de informações
app.use("/api", infoRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
