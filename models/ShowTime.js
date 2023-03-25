
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const showtime = new Schema({
    time: [{type: String}],
    date: {type: Date},
    cinema: {type: mongoose.Types.ObjectId, ref: 'cinemas'},
    movie: {type: mongoose.Types.ObjectId, ref: 'movies'},
    price: {type: Number},
    seats_available: [{type: Number}],
    booking: [{type: mongoose.Types.ObjectId, ref: 'bookings'}],
}, {
    timestamps: true,
})

module.exports = mongoose.model('showtimes', showtime)