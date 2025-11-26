import http from "http";
import { homeRoute } from "./routes/home.route.js";
import { sobreRoute } from "./routes/sobre.route.js";
import { usuarioRoute } from "./routes/users.route.js";

const PORT = 3030;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") return homeRoute(req, res);
  if (url === "/sobre" && method === "GET") return sobreRoute(req, res);
  if (url === "/usuario" && method === "POST") return usuarioRoute(req, res);

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
