"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    id_asociado: { type: String, required: true },
    autor: { type: String, required: true },
    comentario: { type: String, required: true }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Comentario', schema, 'Comentarios');
