const ApiError = require("../Utils/ApiError")

const devError = (res, error) => {
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
        stack: error.stack,
        error: error
    })
}

const ProdError = (res, error) => {
    if(error.isOperational){
        res.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message
        })
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Somthing went wrong! Please try after some time.'
        })
 
    }
}

const castErrorHandling = (error) => {
    const msg = `invalid value for ${error.path} : ${error.value}`;
    return new ApiError(404, msg);
}

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if (process.env.ENVIRONMENT === 'development') {
        devError();
    } else if(process.env.ENVIRONMENT === 'production'){
        if (error.name === 'CastError') {
            error = castErrorHandling(error)
        }
        ProdError();
    }
}