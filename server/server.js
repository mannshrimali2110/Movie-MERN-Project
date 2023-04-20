const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const myMongoConnect = require('./Connection/mongoconnect');
const apiRoute = require('./Routes/apiRoutes');
const apiRoute2 = require('./Routes/apiRoutes2');
const apiRoute3 = require('./Routes/apiRoutes3');
const apiRoute4 = require('./Routes/apiRoutes4');

const PORT = process.env.PORT || 8080;
const app = express();
myMongoConnect();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(apiRoute);
app.use(apiRoute2);
app.use(apiRoute3);
app.use(apiRoute4);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
