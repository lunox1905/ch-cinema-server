
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const cinema = new Schema({
    username: {type: String},
    slug: {type: String, slug: 'name'},
    address: {type: String},
    phoneNumber: {type: Number},
    description: {type: String}
}, {
    timestamps: true,
})

module.exports = mongoose.model('cinemas', cinema)