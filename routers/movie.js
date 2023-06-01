const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/MovieController')
const uploadImage = require('../middleware/uploadImage')
const verifyToken = require('../middleware/auth')
const editImage = require('../middleware/editImage')

router.get('/getmovie', HomeController.getMovies)
router.get('/getmovie/:slug', HomeController.getMovie)
router.post('/addmovie',verifyToken, uploadImage, HomeController.addMovie)
router.post('/editmovie/:id', verifyToken, editImage, HomeController.editMovie)
router.post('/deletemovie', verifyToken, HomeController.deleteMovie)
router.post('/updaterating/:id', HomeController.updateRating)
module.exports = router