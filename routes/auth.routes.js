const router = require('express').Router();
const AuthController = require('../controller/AuthController');

router.post('/auth/register', AuthController.getRegister);
router.post('/auth/login', AuthController.login);

module.exports = router;