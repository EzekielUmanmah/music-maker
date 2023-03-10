import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { seed } from './controllers/seed.js';
import userRoutes from './routes/user.js';
import clipRoutes from './routes/clips.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("You've reached the music maker API!"));

app.post('/seed', seed);
app.use('/user', userRoutes);
app.use('/clips', clipRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
