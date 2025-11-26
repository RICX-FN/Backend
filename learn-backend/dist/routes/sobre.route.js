"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sobreRoute = sobreRoute;
function sobreRoute(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ mensagem: 'Servidor Node.js com TypeScript — Modo Base' }));
}
