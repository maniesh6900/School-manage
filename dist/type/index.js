"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchoolSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CreateSchoolSchema = zod_1.default.object({
    name: zod_1.default.string(),
    address: zod_1.default.string(),
    latitude: zod_1.default.number(),
    longitude: zod_1.default.number(),
});
