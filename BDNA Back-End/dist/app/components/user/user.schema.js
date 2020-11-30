"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    nick: { type: String, required: true },
    rol: { type: String }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('User', schema, 'Users');
