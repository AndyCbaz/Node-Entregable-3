const express = require('express');
const movieRouter = require('./movie.router');
const directorRoute = require('./director.route');
const actorRoute = require('./actor.router');
const genreRoute = require('./genre.route');
const router = express.Router();

router.use("/movies", movieRouter)
router.use("/directors", directorRoute)
router.use("/actors", actorRoute)
router.use("/genres", genreRoute)


module.exports = router;