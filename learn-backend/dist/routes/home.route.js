"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoute = homeRoute;
function homeRoute(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ mensagem: 'Bem-vindo à página inicial!' }));
}
