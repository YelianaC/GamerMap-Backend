import mongoose from 'mongoose';

const tareaSchena = new mongoose.Schena({
    titulo:{type:String, require: true},
    descripcion: {type:String},
    fechaCreacion: {type:Date, default:Date.now}
})

export default mongoose.model('Tarea', tareaSchema);