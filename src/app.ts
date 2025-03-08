import express from 'express';
const app = express();
// import json so i can get data from post method
app.use(express.json());

// import school routes for school
import SchoolsRoutes from "./routes/Schools-routes";

// init school routes
app.use("/api/v1/school", SchoolsRoutes);


export {app};