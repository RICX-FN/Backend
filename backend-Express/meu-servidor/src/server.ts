import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

// Aqui dizemos que todas as rotas de usuário começam com /users
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
