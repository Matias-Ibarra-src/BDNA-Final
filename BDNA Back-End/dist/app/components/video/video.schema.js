"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    titulo: { type: String, required: true },
    videoUrl: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Video', schema, 'Videos');
