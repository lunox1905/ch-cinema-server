
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const food = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String},
    price: {type: Number},
    revenue: {type: Number}
}, {
    timestamps: true,
})

module.exports = mongoose.model('foods', food)