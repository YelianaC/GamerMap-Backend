import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import gameRoutes from './routes/gameRoutes.js';

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json());
app.use("/games", gameRoutes);

//Conexión a Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a Atlas'))
    .catch(err => console.log('Error de conexión', err))


//Rutas de juegos
app.use("/api/games", gameRoutes);

app.get('/', (req, res) => {
    res.send('Backend funcionando');
    });

const PORT = 5000
app.listen(PORT, () => console.log('Servidor escuchando en puerto 5000'));