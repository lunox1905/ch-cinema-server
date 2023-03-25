
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const category = new Schema({
    title: {type: String},
    slug: {type: String, slug: 'title'},
})

module.exports = mongoose.model('categorys', category)