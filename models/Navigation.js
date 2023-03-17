
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const navigation = new Schema({
    title: {type: String},
    slug: {type: String, slug: 'title'},
    phuThuoc: [{
        title: {type: String},
        slug: {type: String, slug: 'title'},
    }]
})

module.exports = mongoose.model('navigations', navigation)