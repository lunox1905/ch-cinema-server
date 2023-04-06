const express = require('express')
const router = express.Router()
const CinemaController = require('../controllers/CinemaController')

router.get('/getcinema', CinemaController.getCinemas)
router.get('/getcinema/:slug', CinemaController.getCinema)
router.post('/addcinema', CinemaController.addCinema)
router.post('/editcinema/:id', CinemaController.editCinema)
router.post('/deletecinema', CinemaController.deleteCinema)
module.exports = router