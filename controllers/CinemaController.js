const Cinema = require('../models/Cinema')
class CinemaController {

    async getCinemas (req, res) {
        try {
            const cinema = await Cinema.find({})
            res.json({success: true, cinema})
        } catch {
            res.json({success: false})
        }
    }

    async getCinema (req, res) {
        try {
            const cinema = await Cinema.findOne({slug: req.params.slug})
            res.json({success: true, cinema})
        } catch {
            res.json({success: false})
        }
    }

    async addCinema (req, res) {
        try {
            const cinema = new Cinema(req.body)
            await cinema.save()
       
            res.json({success: true, cinema})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editCinema (req, res) {
        try {
      
            await Cinema.updateOne({_id: req.params.id}, req.body)
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteCinema (req, res) {
        try {
        
            await Cinema.deleteOne({_id: req.body.id})
           
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }
}

module.exports = new CinemaController()