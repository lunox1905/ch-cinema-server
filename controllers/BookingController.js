const Booking = require('../models/Booking')
const ShowTime = require('../models/ShowTime')
const Food = require('../models/Food')
class BookingController {

    addTicket(req, res) {
        try {
            ShowTime.updateOne({_id: req.body.idShowTime}, {
                $push: {
                    seats_available: req.body.ticket.seat
                }
            })
            .then (() => {
                const ticket = new Booking(req.body.ticket)
                ticket.save()
                .then (() => {
                    res.json({success: true, ticket})
                })
            })
            .catch(() => {
                res.json({success: false})
            })
            if(req.body.ticket.food) {
                req.body.ticket.food.forEach(element => {
                    Food.findById({_id: element.id})
                    .then(food => {
                        if(food) {
                            food.updateOne({ $inc: { revenue: food.price * element.amount} })
                            .then(() => {
                            })
                        }
                    })
                });
            }
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }
    async getAll (req, res) {
        try {
            const booking = await Booking.find({})
            res.json({success: true, booking})
        } catch {
            res.json({success: false})
        }
    }

    async getBooking (req, res) {
        try {
            const booking = await Booking.find({user: req.userId}).populate({
                path: 'food.id',
                select: 'title'
            }).exec()
            res.json({success: true, booking})
        } catch {
            res.json({success: false})
        }
    }
}

module.exports = new BookingController()