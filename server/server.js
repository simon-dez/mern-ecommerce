import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.json());









mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}   );