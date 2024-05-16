import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});