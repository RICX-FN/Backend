"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
exports.userController = {
    create: async (req, res) => {
        const user = await userService_1.userService.create(req.body);
        res.status(201).json(user);
    },
    list: async (req, res) => {
        const users = await userService_1.userService.list();
        res.json(users);
    },
    get: async (req, res) => {
        const user = await userService_1.userService.get(Number(req.params.id));
        if (!user)
            return res.status(404).json({ error: "Usuário não encontrado" });
        res.json(user);
    },
    update: async (req, res) => {
        const user = await userService_1.userService.update(Number(req.params.id), req.body);
        res.json(user);
    },
    delete: async (req, res) => {
        await userService_1.userService.delete(Number(req.params.id));
        res.status(204).send();
    },
};
