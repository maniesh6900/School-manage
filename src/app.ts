import express from 'express';
const app = express();
import cors from "cors";
// import json so i can get data from post method
app.use(express.json());

// cors
app.use(cors({
    origin: "*",
    }),
);

// import school routes for school
import SchoolsRoutes from "./routes/Schools-routes";

// init school routes
app.get("/", (req, res)=>{
    res.json({msg : "hello world"});
});


app.use("/api/v1/school", SchoolsRoutes);


export {app};