import { IncomingMessage, ServerResponse } from 'http';

export function sobreRoute(req: IncomingMessage, res: ServerResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ mensagem: 'Servidor Node.js com TypeScript — Modo Base' }));
}
