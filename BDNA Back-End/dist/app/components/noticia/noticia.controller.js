"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noticia_repository_1 = __importDefault(require("../noticia/noticia.repository"));
function getAllNoticias() {
    return noticia_repository_1.default.getAllNoticias();
}
function deleteNoticia(id) {
    return noticia_repository_1.default.deleteNoticia(id);
}
function getNoticiaById(id) {
    return noticia_repository_1.default.getNoticiaById(id);
}
function addNoticia(noticia) {
    noticia.fecha = new Date;
    return noticia_repository_1.default.addNoticia(noticia);
}
exports.default = { getAllNoticias, getNoticiaById, addNoticia, deleteNoticia };
