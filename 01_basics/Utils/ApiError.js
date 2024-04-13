class ApiError extends Error {
    constructor (statusCode, message, errors = [], stack){
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode;
        this.message = message;
        this.errors = errors
        this.isOperational = true;
        this.data = null
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

module.exports =  ApiError