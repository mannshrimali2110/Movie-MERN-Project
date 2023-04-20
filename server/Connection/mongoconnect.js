const mongoose = require('mongoose');


const myMongoConnect = () => mongoose.connect(
    process.env.mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err)
    );

module.exports = myMongoConnect;

