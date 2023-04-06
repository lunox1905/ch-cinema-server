const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const AuthController = require('../controllers/AuthController')
const verifyToken = require('../middleware/auth')

router.get('/getmenu', HomeController.getMenu)
router.post('/addmenu', HomeController.addMenu)
router.post('/editmenu/:id', HomeController.editMenu)
router.post('/deletemenu', HomeController.deleteMenu)

router.get('/getcategory', HomeController.getCategory)
router.post('/addcategory', HomeController.addCategory)
router.post('/editcategory/:id', HomeController.editCategory)
router.post('/deletecategory', HomeController.deleteCategory)

router.get('/getbanner', HomeController.getBanner)
router.post('/addbanner', HomeController.addBanner)
router.post('/editbanner/:id', HomeController.editBanner)
router.post('/deletebanner', HomeController.deleteBanner)

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
router.get('/auth', verifyToken, AuthController.auth)
module.exports = router