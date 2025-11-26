"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../config/prisma");
class UserService {
    async createUser(name, email) {
        const exists = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (exists)
            throw new Error("User already exists");
        return prisma_1.prisma.user.create({
            data: { name, email }
        });
    }
    async getUsers() {
        return prisma_1.prisma.user.findMany();
    }
    async getUserById(id) {
        return prisma_1.prisma.user.findUnique({ where: { id } });
    }
    async updateUser(id, name, email) {
        return prisma_1.prisma.user.update({
            where: { id },
            data: { name, email }
        });
    }
    async deleteUser(id) {
        return prisma_1.prisma.user.delete({ where: { id } });
    }
}
exports.default = new UserService();
