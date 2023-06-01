const Food = require('../models/Food')
class FoodController {

    async getFoods (req, res) {
        try {
            const food = await Food.find({})
            res.json({success: true, food})
        } catch {
            res.json({success: false})
        }
    }

    async getFood (req, res) {
        try {
            const food = await Food.findOne({slug: req.params.slug})
            res.json({success: true, food})
        } catch {
            res.json({success: false})
        }
    }

    async addFood (req, res) {
        try {
            const food = new Food(req.body)
            await food.save()
       
            res.json({success: true, food})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editFood (req, res) {
        try {
      
            await Food.updateOne({_id: req.params.id}, req.body)
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteFood (req, res) {
        try {
        
            await Food.deleteOne({_id: req.body.id})
           
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }
}

module.exports = new FoodController()