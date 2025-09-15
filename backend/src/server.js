import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import authRouter from './routes/auth.router.js';
import authMessages from './routes/auth.messages.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRouter);
app.use("/api/messages",authMessages);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(_,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));