const express = require('express')
const router = express.Router()
const ShowTimeController = require('../controllers/ShowTimeController')

router.get('/getShowTimes', ShowTimeController.getShowTimeAll)
router.get('/getShowTime/:id', ShowTimeController.getShowTime)
router.get('/getShowTimeByMovie/:id', ShowTimeController.getShowTimeByMovie)
router.get('/getShowTimeByCinema/:id', ShowTimeController.getShowTimeByCinema)
router.post('/addShowTime', ShowTimeController.addShowTime)
router.post('/editShowTime/:id', ShowTimeController.editShowTime)
router.post('/deleteShowTime', ShowTimeController.deleteShowTime)
module.exports = router