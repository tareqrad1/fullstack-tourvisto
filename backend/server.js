import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

//routes

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    credentials: true,
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});