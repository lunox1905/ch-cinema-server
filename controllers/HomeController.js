const Menu = require('../models/Navigation')
const Category = require('../models/Category')
const Banner = require('../models/Banner')
const Users = require('../models/User')
class HomeController {

    async getMenu (req, res) {
        try {
            const menu = await Menu.find({})
            res.json({success: true, menu})
        } catch {
            res.json({success: false})
        }
    }

    async addMenu (req, res) {
        try {
            const menu = new Menu(req.body)
            await menu.save()
            res.json({success: true, menu: menu})
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editMenu (req, res) {
        try {
            await Menu.updateOne({_id: req.params.id}, req.body)
            res.json({success: true})
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteMenu (req, res) {
        try {
            await Menu.deleteOne({_id: req.body.id})
            res.json({success: true, id: req.body.id})
        } catch(e) {
            res.json({success: false})
        }
    }

    // Category
    async getCategory (req, res) {
        try {
            const category = await Category.find({})
            res.json({success: true, category})
        } catch {
            res.json({success: false})
        }
    }

    async addCategory (req, res) {
        try {
           
            const category = new Category(req.body)
            await category.save()
            
    
            res.json({success: true, menu: category})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editCategory (req, res) {
        try {
            await Category.updateOne({_id: req.params.id}, req.body)
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteCategory (req, res) {
        try {
            await Category.deleteOne({_id: req.body.id})
            res.json({success: true, id: req.body.id})
        } catch(e) {
            res.json({success: false})
        }
    }

    // banner

    async getBanner (req, res) {
        try {
            const banner = await Banner.find({})
            res.json({success: true, banner})
        } catch {
            res.json({success: false})
        }
    }

    async addBanner (req, res) {
        try {
         
            const banner = new Banner(req.body)
            await banner.save()
            
    
            res.json({success: true, menu: banner})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

    async editBanner (req, res) {
        try {
            await Banner.updateOne({_id: req.params.id}, req.body)
  
            res.json({success: true})
            
        } catch(e) {
            res.json({success: false})
        }
    }

    async deleteBanner (req, res) {
        try {
            await Banner.deleteOne({_id: req.body.id})
            res.json({success: true, id: req.body.id})
            
        } catch(e) {
            res.json({success: false})
        }
    }

    async getAmountUser (req, res) {
        try {
            const countUser = await Users.countDocuments()
            res.json({success: true, countUser})
        } catch (error) {
            res.json({success: false})
        }
    }
  
}

module.exports = new HomeController()