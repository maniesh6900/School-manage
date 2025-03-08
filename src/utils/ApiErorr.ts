
// export a custom class extents ERROR to send cusom message to frontend
export class ApiError extends Error {
    // taking status message
    constructor(
        public statusCode : number,
        public message : string = "Something went wrong",
   ){
    super(message);
    this.statusCode = statusCode;
    this.message = message;
   }
}

