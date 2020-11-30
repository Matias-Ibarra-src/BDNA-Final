"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporte_repository_1 = __importDefault(require("./reporte.repository"));
function getAllReportes() {
    return reporte_repository_1.default.getAllReportes();
}
function getReporteById(id) {
    return reporte_repository_1.default.getReporteById(id);
}
function addReporte(reporte) {
    return reporte_repository_1.default.addReporte(reporte);
}
exports.default = { getAllReportes, getReporteById, addReporte };
