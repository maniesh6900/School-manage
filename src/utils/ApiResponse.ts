
// custom class for sending json
export class ApiResponse {
    public success : Boolean;
    // taking parameters to send to frontend
    constructor ( 
        public  statusCode : Number,
        public data: Object,
        public message : String,
    ){
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
        this.success = true;
    }
}