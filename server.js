import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import router from'./routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('', router);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});