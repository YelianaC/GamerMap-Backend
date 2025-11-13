import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import tarea from './models/Tarea.js'

const app = express()

//configurando nuestro servidor para permitir
app.use(cors())
app.use(express.json())

const MONGO_URI = 'jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/{yelianacampobarraza}'

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a Atlas'))
    .catch(err => console.log('Error de conexión', err))

const PORT = 5000
app.listen(PORT, () => console.log('Servidor escuchando en puerto 5000'))