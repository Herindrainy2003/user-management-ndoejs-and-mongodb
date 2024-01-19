const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/' , userController.home);
router.post('/adduser' , userController.addUser);
router.get('/show_user' , userController.showUser);
router.get('/delete/:id' , userController.deleteUser)
router.get('/edit/:id' , userController.editUser)
router.post('/updateUser/:id' , userController.updateUser)
router.get('/updateUser/:id' , userController.showUser)

module.exports = router ;