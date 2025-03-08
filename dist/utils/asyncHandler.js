"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
// its a method so i dont have to use trycatch block 
const asyncHandler = (promiseHandler) => {
    return (req, res, next) => {
        Promise.resolve(promiseHandler(req, res, next)).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
