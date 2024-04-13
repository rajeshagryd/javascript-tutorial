const express = require("express")
const { topMovies } = require("./../Middlewares/Movies/topMovies.middlewares")
const { getAllMovies, getOneMovie, addMovies, movieStats } = require('./../Controllers/movie.controllers')

const router = express.Router();

// app.get("/api/v1/movies", getAllMovies);
// app.get('/api/v1/movies/:movieId', getOneMovie);

router.route('/highest-rating-movie').get(topMovies, getAllMovies)
router.route('/movie-stats').get(movieStats)

router.route('/').get(getAllMovies)

router.route('/:movieId').get(getOneMovie)

router.route('/')
.post(addMovies)

module.exports= router;