import model from './reporte.schema'
import { Reporte } from '../../models/reporte.model';


async function getAllReportes() : Promise<Reporte[]> {
    return model.find();
}

function getReporteById(id: String){
   return model.findOne({ _id : id});
}

function addReporte( reporte: Reporte): Promise<Reporte>{
    return model.create<Reporte>(reporte);
}

export default { getAllReportes , getReporteById, addReporte};