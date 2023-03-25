
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const banner = new Schema({
    image: {type: String},
    link: {type: String}
})

module.exports = mongoose.model('banners', banner)