import { NextFunction, Request, Response } from "express"

// its a method so i dont have to use trycatch block 
export const asyncHandler = (promiseHandler: Function) => {
    return (req : Request, res : Response, next : NextFunction)=> {
        Promise.resolve(promiseHandler(req, res, next)).catch(next);
    };
}