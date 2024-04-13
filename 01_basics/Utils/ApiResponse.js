class ApiResponse {
    constructor(statusCode, data, message){
        this.statusCode = statusCode;
        this.status = 'Success';
        this.data = data;
        this.message = message || '';
    }
}
module.exports = ApiResponse