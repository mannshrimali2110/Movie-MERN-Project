const MovieData = require('../Model/movieModel');

exports.getAllMovies = (req, res) => {
    MovieData.find().limit(10).then((result) => {
        return res.json(result);
    })
        .catch((err) => {
            console.log(err);
        })
}