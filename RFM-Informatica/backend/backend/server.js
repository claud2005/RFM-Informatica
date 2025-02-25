const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
const mongoURI = "mongodb://localhost:27017/seuBancoDeDados"; // Atualize com o nome do seu banco
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("💾 Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Usar as rotas
app.use("/api/auth", authRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.send("🚀 API está rodando!");
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
