const Movie = require("./../models/movie.models");
const ApiFeatures = require("./../Utils/ApiFeatures")
const ApiError = require("./../Utils/ApiError")
const ApiResponse = require("./../Utils/ApiResponse")
const AsyncHandler = require("./../Utils/AsyncHandler")

const getAllMovies = async (req, res) => {
    try {
        // remove unwanted fields from query obj as they are not needed in the database
        excludeFields = ['sort','page', 'limit', 'fields']
        //create shallow copy of the request query object
        let queryObj = ({...req.query});
        excludeFields.forEach((el) => {
            delete queryObj[el]
        })
        
        // const features = new ApiFeatures(Movie.find(), req.query).filter().sort().limitFields().paginate();

        const movies  = await Movie.find(queryObj)
        .select('Title Released Genre Language Year')
        .sort(req.query.sort)
        .skip((+req.query.page-1)*req.query.limit)
        .limit(parseInt(req.query.limit))
        .exec();
        res.status(200).json({
            status: 'Success',
            movieLength: movies.length,
            data: {
                movies
            }
        })
    } catch (error) {
        console.log('error while fetching all movies',error);
    }
}

const movieStats = async(req, res) => {
    try {
        const movie = await Movie.aggregate([
            { $match : { imdbRating : { $gte: 4.7 } }},
            { $group: { 
                _id: '$Year',
                avgRating: { $avg: '$imdbRating' },
                minRating: { $min: '$imdbRating' },
                maxRating: { $max: '$imdbRating' },
                movieCountOnRating: { $sum: 1} // for checking differences
            }},
            // { sort: { avgRating : 1 } }
        ])
        if(!movie) {
            return res.status(404).
            json(new ApiError(404, "No any movie is found"))
        }
        return res.status(200)
        .json(new ApiResponse(200, movie, "Data fetched successfully"))
    } catch (error) {
        return res.status(404)
        .json(new ApiError(404, `Error in Fetching Stats, Error - ${error.message}`))
    }
}

// Get a single movie by its ID
const getOneMovie = (req, res) => {
    const id = req.params.movieId;
    console.log(id);
    const movie = Movie.findById(id).then((data)=>{
        if(!data){
            res.status(404).json({message:'No movie found with the given ID.'})
        }else{
            res.status(200).json({
                status: "success",
                data:{
                    movie : data
                }
            });
        }
    }).catch((err)=>console.log(err));
};

const addMovies = async (req, res) => {
    const movieArray = req.body;
    const movie = await Movie.create(movieArray)
    res.status(200).json({
        status: "Success",
        data: movie,
        message: "Movies added successfully!",
    })
}

function formateDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (today.getMonth() + 1)).
    slice(-2) + "-";
    const day = ("0" + today.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}


module.exports = {
    getAllMovies,
    getOneMovie,
    addMovies,
    movieStats
}