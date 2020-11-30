import { Video } from '../../models/video.model';
import videoRepository from "../video/video.repository";

function getAllVideos(){
    return videoRepository.getAllVideos();
}

function addVideo(video : Video){
    video.fecha=new Date;
    return videoRepository.addVideo(video);
}

export default {getAllVideos,addVideo};