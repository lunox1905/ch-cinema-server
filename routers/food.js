const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/FoodController')
const uploadImage = require('../middleware/uploadImage')

router.get('/getFood', FoodController.getFoods)
router.get('/getFood/:slug', FoodController.getFood)
router.post('/addFood', uploadImage, FoodController.addFood)
router.post('/editFood/:id', FoodController.editFood)
router.post('/deleteFood', FoodController.deleteFood)
module.exports = router