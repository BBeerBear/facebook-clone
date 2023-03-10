const express = require('express');
const { register, activateAccount, login } = require('../controllers/user');

const router = express.Router();

router.post('/register', register);
router.get('/activate', activateAccount);
router.get('/login', login);

module.exports = router;
