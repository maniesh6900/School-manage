"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchools = exports.createSchool = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const ApiErorr_1 = require("../utils/ApiErorr");
const ApiResponse_1 = require("../utils/ApiResponse");
const prisma_1 = require("../prisma");
const type_1 = require("../type");
exports.createSchool = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parsedData = type_1.CreateSchoolSchema.safeParse(req.body);
    if (!parsedData.success) {
        throw new ApiErorr_1.ApiError(409, "Invalid Data");
    }
    const exist = yield prisma_1.client.schools.findFirst({
        where: {
            name: parsedData.data.name,
        },
    });
    const adress = yield prisma_1.client.schools.findFirst({
        where: {
            address: parsedData.data.address,
        },
    });
    if ((exist || adress) || (exist && adress)) {
        throw new ApiErorr_1.ApiError(409, "Already exists in the dataBase");
    }
    const school = yield prisma_1.client.schools.create({
        data: {
            name: parsedData.data.name.toLowerCase(),
            address: parsedData.data.address,
            latitude: parsedData.data.latitude,
            longitude: parsedData.data.longitude,
        },
    });
    if (!school) {
        throw new ApiErorr_1.ApiError(500, " not able to add new School");
    }
    return res
        .json(new ApiResponse_1.ApiResponse(201, school, "successfully created school"));
}));
exports.getSchools = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const schools = yield prisma_1.client.schools.findMany();
    return res
        .json(new ApiResponse_1.ApiResponse(200, schools, "successfully fetched all schools"));
}));
