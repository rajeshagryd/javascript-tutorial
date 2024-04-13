

const topMovies = async(req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-Year';
    next();
}

module.exports = { topMovies }