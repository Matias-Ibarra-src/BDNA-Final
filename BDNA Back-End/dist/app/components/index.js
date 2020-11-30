"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comentario_1 = __importDefault(require("./comentario"));
const noticia_1 = __importDefault(require("./noticia"));
const user_1 = __importDefault(require("./user"));
const video_1 = __importDefault(require("./video"));
const reporte_1 = __importDefault(require("./reporte"));
const components = [
    noticia_1.default,
    video_1.default,
    comentario_1.default,
    user_1.default,
    reporte_1.default
];
exports.default = components;
