"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const home_route_js_1 = require("./routes/home.route.js");
const sobre_route_js_1 = require("./routes/sobre.route.js");
const users_route_js_1 = require("./routes/users.route.js");
const PORT = 3030;
const server = http_1.default.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/' && method === 'GET')
        return (0, home_route_js_1.homeRoute)(req, res);
    if (url === '/sobre' && method === 'GET')
        return (0, sobre_route_js_1.sobreRoute)(req, res);
    if (url === '/usuario' && method === 'POST')
        return (0, users_route_js_1.usuarioRoute)(req, res);
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
});
server.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
