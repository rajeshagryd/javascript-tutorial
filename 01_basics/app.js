const express = require("express")
const app = express();
const morgan = require("morgan")


// ============== Middlewares ============
function logger(req, res, next) {
    console.log('This is Logger Middleware');
    next();
}

app.use(express.json({limit:'16kb'}))
if(process.env.NODE_ENV === 'production'){
    app.use(morgan('dev')) // This middleware is used to basically log the request details
}
// app.use(express.urlencoded({extended:true, limit:'16kb'}))
app.use(express.static('public'))
app.use(logger)
app.use((req, res, next) => {
    console.log('This is a middleware');
    req.createdAt = new Date().toISOString
    next();
})


// Router Declairation
const movieRouter = require("./Routes/movie.routes");
const ApiError = require("./Utils/ApiError");

app.use('/api/v1/movies', movieRouter)

app.all('*', (req, res, next) => {
    return res.status(404).json(new ApiError(404, "The requested Url is not available"))
});
module.exports = {app}