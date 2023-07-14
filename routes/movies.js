const routerMovie = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { reLink } = require('../utils/constants');

routerMovie.get('/', getMovies);
routerMovie.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(reLink).required(),
    trailerLink: Joi.string().pattern(reLink).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().pattern(reLink).required(),
    movieId: Joi.number().required(),
  }),
}), createMovie);
routerMovie.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }),
}), deleteMovie);

module.exports = routerMovie;
