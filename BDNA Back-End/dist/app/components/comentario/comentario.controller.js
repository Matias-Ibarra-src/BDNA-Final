"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comentario_repository_1 = __importDefault(require("../comentario/comentario.repository"));
function getAllComentarios() {
    return comentario_repository_1.default.getAllComentarios();
}
function deleteComentario(id) {
    return comentario_repository_1.default.deleteComentario(id);
}
function getComentarioById(id) {
    return comentario_repository_1.default.getComentarioById(id);
}
function addComentario(comentario) {
    return comentario_repository_1.default.addComentario(comentario);
}
exports.default = { getAllComentarios, getComentarioById, addComentario, deleteComentario };
