
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const cinema = new Schema({
    name: {type: String},
    slug: {type: String, slug: 'name'},
    address: {type: String},
    phoneNumber: {type: Number},
    description: {type: String},
    numberOfSeats: {type: Number, default: 128}
}, {
    timestamps: true,
})

module.exports = mongoose.model('cinemas', cinema)