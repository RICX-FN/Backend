"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_service_1 = require("../services/user.service");
const getUsers = async (req, res) => {
    const users = await (0, user_service_1.listUsersService)();
    res.json({
        success: true,
        data: users,
    });
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    const { nome, email } = req.body;
    const newUser = await (0, user_service_1.createUserService)(nome, email);
    res.status(201).json({
        success: true,
        data: newUser,
    });
};
exports.createUser = createUser;
