"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const noticia_network_1 = __importDefault(require("./noticia.network"));
const noticia = express_1.default();
noticia.use('/noticia', noticia_network_1.default);
exports.default = noticia;
