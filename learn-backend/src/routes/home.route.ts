import { IncomingMessage, ServerResponse } from "http";

export function homeRoute(req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ mensagem: "Bem-vindo à página inicial!" }));
}
