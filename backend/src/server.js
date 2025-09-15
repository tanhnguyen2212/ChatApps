import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.router.js';
import authMessages from './routes/auth.messages.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRouter);
app.use("/api/messages",authMessages);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));