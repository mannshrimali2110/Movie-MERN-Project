const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/movieDB';

const myMongoConnect = () => mongoose.connect(
    mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err)
    );

module.exports = myMongoConnect;

