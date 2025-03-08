"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
// export a custom class extents ERROR to send cusom message to frontend
class ApiError extends Error {
    // taking status message
    constructor(statusCode, message = "Something went wrong") {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.ApiError = ApiError;
