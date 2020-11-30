"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reporte_network_1 = __importDefault(require("./reporte.network"));
const reporte = express_1.default();
reporte.use('/reporte', reporte_network_1.default);
exports.default = reporte;
