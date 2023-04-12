const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

    MovieName: {
        type: String,
    },
    Genre: {
        type: Array,
    },
    IMLink: {
        type: String,
    },
    Year: {
        type: Number,
    },
    Rating: {
        type: Number,
    },
    MovieLink: {
        type: String,
    },
    Description: {
        type: String,
    }
})

const MovieData = mongoose.model('movies', movieSchema);

module.exports = MovieData;

