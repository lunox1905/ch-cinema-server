
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const showtime = new Schema({
    time: {type: String},
    date: {type: Date},
    cinema: {type: mongoose.Types.ObjectId, ref: 'cinemas'},
    movie: {type: mongoose.Types.ObjectId, ref: 'movies'},
    price: {type: Number},
    seats_available: [{type: String}],
    booking: [{type: mongoose.Types.ObjectId, ref: 'bookings'}],
    createdAt: { type: Date, default: Date.now()}
})
showtime.index({ "date": 1 }, { expireAfterSeconds: -1 })
module.exports = mongoose.model('showtimes', showtime)