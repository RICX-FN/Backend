import { IncomingMessage, ServerResponse } from 'http';

export function usuarioRoute(req: IncomingMessage, res: ServerResponse) {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ mensagem: 'Usuário criado com sucesso!', dados: data }));
  });
}
