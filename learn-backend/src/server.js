"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var home_route_js_1 = require("./routes/home.route.js");
var sobre_route_js_1 = require("./routes/sobre.route.js");
var users_route_js_1 = require("./routes/users.route.js");
var PORT = 3000;
var server = http_1.default.createServer(function (req, res) {
    var url = req.url, method = req.method;
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
server.listen(PORT, function () { return console.log("Servidor rodando em http://localhost:".concat(PORT)); });
