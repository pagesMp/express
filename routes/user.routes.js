const router = require('express').Router();
const userController = require('../controller/UserController');

router.get('/users', userController.getAll);
router.post('/users', userController.getCreate);
router.get('/users/:id', userController.getById);
router.delete('/users/:id', userController.delete);


module.exports = router;