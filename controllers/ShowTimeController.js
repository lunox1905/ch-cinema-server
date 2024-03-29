const ShowTime = require('../models/ShowTime')
class ShowTimeController {

    async getShowTimeAll (req, res) {
        try {
            const showTime = await ShowTime.find({})
                .populate({
                    path: 'movie',
                    select: 'title _id'
                  })
                .populate({
                    path: 'cinema',
                    select: 'name _id'
                  }).exec() 
            res.json({success: true, showTime})
        } catch {
            res.json({success: false})
        }
    }

    async getShowTime (req, res) {
        try {
            const showTime = await ShowTime.findOne({_id: req.params.id}) 
            res.json({success: true, showTime})
        } catch {
            res.json({success: false})
        }
    }

    async getShowTimeByMovie (req, res) {
        try {
            
            const showTime = await ShowTime.find({movie: req.params.id}) 
            .populate({
                path: 'movie',
                select: 'title _id'
              })
            .populate({
                path: 'cinema',
                select: 'name _id'
              }).exec() 
            res.json({success: true, showTime})
        } catch {
            res.json({success: false})
        }
    }

    async getShowTimeByCinema (req, res) {
        try {
            const showTime = await ShowTime.find({cinema: req.params.id}) 
            .populate({
                path: 'movie',
                select: 'title _id'
              })
            .populate({
                path: 'cinema',
                select: 'name _id'
              }).exec() 
            res.json({success: true, showTime})
        } catch {
            res.json({success: false})
        }
    }

    async addShowTime (req, res) {
        try {
            req.body.date += '/' + req.body.time
            req.body.date = new Date(req.body.date)
            const showTime = new ShowTime(req.body)
            await showTime.save()
            
            res.json({success: true, showTime})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editShowTime (req, res) {
        try {
      
            await ShowTime.updateOne({_id: req.params.id}, req.body)
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteShowTime (req, res) {
        try {
            await ShowTime.deleteOne({_id: req.body.id})
           
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }
}

module.exports = new ShowTimeController()