"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
// import json so i can get data from post method
app.use(express_1.default.json());
// import school routes for school
const Schools_routes_1 = __importDefault(require("./routes/Schools-routes"));
// init school routes
app.use("/api/v1/school", Schools_routes_1.default);
