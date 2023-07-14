const routerUser = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getCurentUser, updateUser } = require('../controllers/users');

routerUser.get('/me', getCurentUser);
routerUser.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({ tlds: false }).required(),
  }),
}), updateUser);

module.exports = routerUser;
