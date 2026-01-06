import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Server in typescript is running!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});