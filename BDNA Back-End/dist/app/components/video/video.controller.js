"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_repository_1 = __importDefault(require("../video/video.repository"));
function getAllVideos() {
    return video_repository_1.default.getAllVideos();
}
function addVideo(video) {
    video.fecha = new Date;
    return video_repository_1.default.addVideo(video);
}
exports.default = { getAllVideos, addVideo };
