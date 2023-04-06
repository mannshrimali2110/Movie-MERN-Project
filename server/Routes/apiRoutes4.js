const express = require('express');
const Controller = require('../Controllers/SingleGenreController');
const router = express.Router();

router.get("/Comedy", Controller.getComedyGenre);
router.get("/Romance", Controller.getRomanceGenre);
router.get("/Horror", Controller.getHorrorGenre);
router.get("/Thriller", Controller.getThrillerGenre);
router.get("/Drama", Controller.getDramaGenre);
router.get("/Action", Controller.getFantasyGenre);
router.get("/Fantasy", Controller.getFantasyGenre);
router.get("/SciFi", Controller.getSciFiGenre);
router.get("/Crime", Controller.getCrimeGenre);
router.get("/Mystery", Controller.getMysteryGenre);

module.exports = router;
