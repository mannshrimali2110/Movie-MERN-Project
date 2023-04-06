const express = require('express');
const Controller = require('../Controllers/MovieController');
const router = express.Router();

router.get("/api", Controller.getAllMovies);

module.exports = router;
