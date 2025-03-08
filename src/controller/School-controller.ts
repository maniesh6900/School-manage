import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiErorr";
import { ApiResponse } from "../utils/ApiResponse";
import { client } from "../prisma";
import { CreateSchoolSchema } from "../type";
import { Request, Response } from "express";


export const createSchool = asyncHandler(async (req: Request, res : Response) => {
    const parsedData = CreateSchoolSchema.safeParse(req.body);
    if(!parsedData.success) {
        throw new ApiError(409, "Invalid Data");
    }

    const exist = await client.schools.findFirst({
        where  : {
            name : parsedData.data.name,

        },
    });
    const adress = await client.schools.findFirst({
        where  : {
            address : parsedData.data.address,

        },
    });

    if((exist || adress) || (exist && adress)) {
        throw new ApiError(409, "Already exists in the dataBase");
    }

     const school = await client.schools.create({
        data : {
            name : parsedData.data.name.toLowerCase(),
            address : parsedData.data.address,
            latitude : parsedData.data.latitude,
            longitude : parsedData.data.longitude,
        },
     });
     if(!school) {
        throw new ApiError(500, " not able to add new School");
    }

    return res
    .json(
        new ApiResponse(201, school, "successfully created school"),
    );


});

export const getSchools = asyncHandler(async (req: Request, res : Response) => {
    const schools = await client.schools.findMany();
    return res
    .json(
        new ApiResponse(200, schools, "successfully fetched all schools"),
    );
})