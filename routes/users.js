const router = require('express').Router();
const { getCurentUser, updateUser } = require('../controllers/users');

router.get('/me', getCurentUser);
router.patch('/me', updateUser);

module.exports = router;
