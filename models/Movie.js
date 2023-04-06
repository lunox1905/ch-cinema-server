
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const movie = new Schema({
    title: {type: String},
    titleVi: {type: String},
    image: {type: String},
    trailer: {type: String},
    slug: {type: String, slug: 'title'},
    cast: [{type: String}],
    director: {type: String},
    duration: {type: Number},
    description: {type: String},
    producer: {type: String},
    country: {type: String},
    view: {type: Number, default: 0},
    premiereDate: {type: Date},
    rating: {
        amount: {type: Number, default: 0},
        score: {type: Number, default: 0}
    },
    category: [{type: mongoose.Types.ObjectId, ref: 'categorys'}],
}, {
    timestamps: true,
})

module.exports = mongoose.model('movies', movie)