import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
    titulo:{type:String, require: true},
    descripcion: {type:String},
    fechaCreacion: {type:Date, default:Date.now}
})

export default mongoose.model('Tarea', tareaSchema);