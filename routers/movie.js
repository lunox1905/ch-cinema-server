const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/MovieController')

router.get('/getmovie', HomeController.getMovies)
router.get('/getmovie/:slug', HomeController.getMovie)
router.post('/addmovie', HomeController.addMovie)
router.post('/editmovie/:id', HomeController.editMovie)
module.exports = router