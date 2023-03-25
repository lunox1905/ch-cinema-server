const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

router.get('/getmenu', HomeController.getMenu)
router.post('/addmenu', HomeController.addMenu)
router.post('/editmenu/:id', HomeController.editMenu)

router.get('/getcategory', HomeController.getCategory)
router.post('/addcategory', HomeController.addCategory)
router.post('/editcategory/:id', HomeController.editCategory)

router.get('/getbanner', HomeController.getBanner)
router.post('/addbanner', HomeController.addBanner)
router.post('/editbanner/:id', HomeController.editBanner)
module.exports = router