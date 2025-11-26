"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.listUsersService = void 0;
const prisma_1 = require("../database/prisma");
// Listar usuários
const listUsersService = async () => {
    return await prisma_1.prisma.user.findMany();
};
exports.listUsersService = listUsersService;
// Criar usuário
const createUserService = async (nome, email) => {
    return await prisma_1.prisma.user.create({
        data: { nome, email }
    });
};
exports.createUserService = createUserService;
