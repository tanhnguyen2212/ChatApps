import express from 'express';

const router = express.Router();

router.get("/signup",(req,res)=>{
    res.send("Signup");
})

export default router;
