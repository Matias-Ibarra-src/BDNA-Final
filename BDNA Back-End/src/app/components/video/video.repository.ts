import { Video } from '../../models/video.model';
import model from "./video.schema";

function getAllVideos(){
    return model.find();
}

function addVideo( video: Video){
    return model.create<Video>(video);
}

export default {getAllVideos, addVideo};