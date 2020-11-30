"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_schema_1 = __importDefault(require("./video.schema"));
function getAllVideos() {
    return video_schema_1.default.find();
}
function addVideo(video) {
    return video_schema_1.default.create(video);
}
exports.default = { getAllVideos, addVideo };
