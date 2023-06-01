const express = require('express')
const router = express.Router()
const BookingController = require('../controllers/BookingController')
const verifyToken = require('../middleware/auth')

router.post('/add', BookingController.addTicket)
router.get('/getall', BookingController.getAll)
router.get('/getbooking', verifyToken, BookingController.getBooking)
module.exports = router