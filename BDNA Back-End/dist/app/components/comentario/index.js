"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comentario_network_1 = __importDefault(require("./comentario.network"));
const comentario = express_1.default();
comentario.use('/comentario', comentario_network_1.default);
exports.default = comentario;
