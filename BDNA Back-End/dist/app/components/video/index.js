"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const video_network_1 = __importDefault(require("./video.network"));
const video = express_1.default();
video.use('/video', video_network_1.default);
exports.default = video;
