const express = require('express');
const Controller = require('../Controllers/GenreController');
const router = express.Router();

router.post("/api2", Controller.postGenre);

router.get("/api2", Controller.getGenre);

module.exports = router;
