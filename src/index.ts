import dotenv from "dotenv";
import { app } from "./app";
import express from "express";
const port = 4000 ;

// config  env so a can use enc in application 
dotenv.config({
    path :"./.env",
});

app.get("/", (req, res)=>{
    res.json({msg : "hello world"});
});

// server listening 
app.listen(port, ()=> {
    console.log(`server is up on : ${port}`);
    
});
