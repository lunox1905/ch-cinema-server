
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const booking = new Schema({
    cinema: {type: mongoose.Types.ObjectId, ref: 'cinemas'},
    movie: {type: mongoose.Types.ObjectId, ref: 'movies'},
    food: [{
        id: {type: mongoose.Types.ObjectId, ref: 'foods'},
        amount: {type: Number}
    }],
    seat: [{type: String}],
    price: {type: Number},
    user: {type: mongoose.Types.ObjectId, ref: 'users'},
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('bookings', booking)