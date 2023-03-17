const Nav = require('../models/Navigation')
class HomeController {

    async getNav (req, res) {
        try {
            const nav = await Nav.find({})
            res.json({success: true, nav})
        } catch {
            res.json({success: false})
        }
    }

    async addNav (req, res) {
        try {
      
            const menu = new Nav(req.body)
            await menu.save()
            
    
            res.json({success: true, menu: menu})
            
        } catch(e) {
            console.log(e)
            res.json({success: false})
        }
    }

  
}

module.exports = new HomeController()