const MovieData = require('../Model/movieModel');

exports.getComedyGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Comedy' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getRomanceGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Romance' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getHorrorGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Horror' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getThrillerGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Thriller' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getDramaGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Drama' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getActionGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Action' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getFantasyGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Fantasy' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getSciFiGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Sci-Fi' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getCrimeGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Crime' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}
exports.getMysteryGenre = (req, res) => {
    MovieData.find({ 'Genre': 'Mystery' }).limit(30)
        .then((result) => {
            return res.json(result);
        })
        .catch((err) => {
            console.log(err);
        })
}