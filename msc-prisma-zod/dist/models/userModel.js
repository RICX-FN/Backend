"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.userModel = {
    create: (data) => prisma.user.create({ data }),
    findAll: () => prisma.user.findMany(),
    findById: (id) => prisma.user.findUnique({ where: { id } }),
    update: (id, data) => prisma.user.update({ where: { id }, data }),
    delete: (id) => prisma.user.delete({ where: { id } }),
};
