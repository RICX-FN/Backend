"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userModel_1 = require("../models/userModel");
exports.userService = {
    create: (data) => userModel_1.userModel.create(data),
    list: () => userModel_1.userModel.findAll(),
    get: (id) => userModel_1.userModel.findById(id),
    update: (id, data) => userModel_1.userModel.update(id, data),
    delete: (id) => userModel_1.userModel.delete(id),
};
