"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    Email_asociado: { type: String, required: true },
    tipo: { type: String, required: true },
    Reclamo: { type: String, required: true },
    Estado: { type: String, required: true }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Reporte', schema, 'Reportes');
