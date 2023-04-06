const MovieData = require('../Model/movieModel');

var genre1, genre2 = '';

exports.postGenre = (req, res) => {
    genre1 = req.body.genre1;
    genre2 = req.body.genre2;
    return res.json()
}

exports.getGenre = (req, res) => {
    MovieData.find({ $and: [{ 'Genre': genre1 }, { 'Genre': genre2 }] }).limit(30)
        .then((result) => {
            return res.json(result)
        })
        .catch((err) => {
            console.log(err);
        })
}