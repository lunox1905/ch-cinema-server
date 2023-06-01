const Movie = require('../models/Movie')
class MovieController {

    async getMovies (req, res) {
        try {
            const movie = await Movie.find({})
            res.json({success: true, movie})
        } catch {
            res.json({success: false})
        }
    }

    async getMovie (req, res) {
        try {
            const movie = await Movie.findOne({slug: req.params.slug}).populate('category').exec()  
            res.json({success: true, movie})
        } catch {
            res.json({success: false})
        }
    }

    async addMovie (req, res) {
        try {
            const movie = new Movie(req.body)
            await movie.save()
            res.json({success: true, movie})
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editMovie (req, res) {
        try {
            await Movie.updateOne({_id: req.params.id}, req.body)
            res.json({success: true})
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteMovie (req, res) {
        try {
            await Movie.deleteOne({_id: req.body.id})
            res.json({success: true, movie: req.body.id})
        } catch(e) {
            res.json({success: false})
        }
    }

    async updateRating (req, res) {
        try {
            const movie = await Movie.findById({_id: req.params.id})
            if(movie) {
                const rating = ((movie.rating.amount * movie.rating.score) + req.body.rating) / (movie.rating.amount + 1)
                movie.updateOne({rating: {
                    score: rating,
                    amount: movie.rating.amount + 1
                }})
                .then (() => {
                    res.json({success: true})
                })
                .catch (() => {
                    res.json({success: false})
                })
            }
        } catch(e) {
            res.json({success: false})
        }
    }
}

module.exports = new MovieController()