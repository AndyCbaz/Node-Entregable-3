const { getAll, create, getOne, remove, update } = require('../controllers/genre.controller');
const express = require('express');

const genreRoute = express.Router();

genreRoute.route('/')
    .get(getAll)
    .post(create);

genreRoute.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genreRoute;