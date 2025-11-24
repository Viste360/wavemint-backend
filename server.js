import cors from "cors";
app.use(cors());
const express=require('express');const app=express();
app.get('/health',(req,res)=>res.send('ok'));
app.listen(3000,()=>console.log('running'));
