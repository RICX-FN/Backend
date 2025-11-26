"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    async create(req, res) {
        try {
            const { name, email } = req.body;
            const user = await userService_1.default.createUser(name, email);
            return res.status(201).json(user);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async list(req, res) {
        const users = await userService_1.default.getUsers();
        return res.json(users);
    }
    async find(req, res) {
        const id = Number(req.params.id);
        const user = await userService_1.default.getUserById(id);
        if (!user)
            return res.status(404).json({ error: "User not found" });
        return res.json(user);
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, email } = req.body;
            const user = await userService_1.default.updateUser(id, name, email);
            return res.json(user);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            await userService_1.default.deleteUser(id);
            return res.json({ message: "User deleted" });
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
exports.default = new UserController();
