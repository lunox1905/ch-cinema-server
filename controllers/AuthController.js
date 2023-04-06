const Users = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
class AuthController {

    async auth(req, res) {
        try {
            const user = await Users.findById(req.userId).select('-password')
            res.json({success: true, user})
        } catch (e) {

        }
    }

    async register(req, res, next){
        
        try{
            const { username, email, password, gender, phoneNumber } = req.body
            const user = await Users.findOne({ email})
            if(user){
                return res.status(400).json({success: false, message: 'User already'})
            }

            const hashedPassword = await argon2.hash(password)
            const newUser = new Users({username, password: hashedPassword, email, gender, phoneNumber})
            await newUser.save()
            const accessToken = jwt.sign({
                userId: newUser._id
            }, process.env.ACCESS_TOKEN_SECRET)
    
            res.json({success: true, message: 'User created success', accessToken})
        } catch(err){
            res.status(500).json({success: false, message: 'Error in server'})
        }
    }

    async login(req, res, next){
        try{
            
            const {email, password} = req.body
            const user = await Users.findOne({ email })

            if(!user){
                return res.status(400).json({success: false, message: 'Mật khẩu hoặc tài khoản không chính xác'})
            }
            const passwordValid = await argon2.verify(user.password, password)
            if(!passwordValid) {
                return res.status(400).json({success: false, message: 'Mật khẩu hoặc tài khoản không chính xác'})  
            }
            
            const accessToken = jwt.sign(
                { userId: user._id, role: user.role},process.env.ACCESS_TOKEN_SECRET
            )
            res.json({success: true, message: 'User login successfully', accessToken})
            
        
        } catch(err){
            res.status(500).json({success: false, message: 'Error in server'})
        }
    }
}

module.exports = new AuthController();