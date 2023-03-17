const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

router.get('/getNav', HomeController.getNav)
router.post('/addNav', HomeController.addNav)
module.exports = router