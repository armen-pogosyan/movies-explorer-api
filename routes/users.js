const router = require('express').Router();
const { getCurentUser, updateUser } = require('../controllers/users');

router.get('/users/me', getCurentUser);
router.patch('/users/me', updateUser);

module.exports = router;
