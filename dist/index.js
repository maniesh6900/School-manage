"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const port = 4000;
// config  env so a can use enc in application 
dotenv_1.default.config({
    path: "./.env",
});
// server listening 
app_1.app.listen(port, () => {
    console.log(`server is up on : ${port}`);
});
