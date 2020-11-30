import comentarioRepository from "../comentario/comentario.repository";
import reporteRepository from "./reporte.repository";
import { Reporte } from '../../models/reporte.model';

function getAllReportes(){
    return reporteRepository.getAllReportes();
}

function getReporteById(id : String){
    return reporteRepository.getReporteById(id);
}

function addReporte(reporte : Reporte){
    return reporteRepository.addReporte(reporte);
}

export default {getAllReportes,getReporteById,addReporte};