const MovieData = require('../Model/movieModel');

var movieName = "";

exports.postMovieName = (req, res) => {
    movieName = req.body.MovieSearch;
    return res.json()

}

exports.getMovieName = (req, res) => {
    MovieData.find({ 'MovieName': movieName })
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}