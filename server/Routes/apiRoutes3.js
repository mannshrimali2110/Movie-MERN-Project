const Controller = require('../Controllers/NameController');

const express = require('express');
const router = express.Router();

router.post("/api3", Controller.postMovieName);

router.get("/api3", Controller.getMovieName);

module.exports = router;
