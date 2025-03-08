import z from "zod";

export const CreateSchoolSchema =  z.object({
    name : z.string(),
    address : z.string(),
    latitude : z.number(),
    longitude : z.number(),
})