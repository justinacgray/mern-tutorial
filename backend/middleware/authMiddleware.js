const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const protectRoute = asyncHandler(async(req, res, next) => {
    let token
    console.log("req from authMiddleware ==>", req)
    console.log("res from authMiddleware ==>", res)
    console.log("next from authMiddleware ==>", next)

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1]
            console.log("token from auth ===>", token)
            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET) //takes in 2 parameters- token and secret key
            // get user from token
            req.user = await User.findById(decoded.id).select('-password') //this line does again?
            console.log("req.user ===>", req.user)
            next()
        } catch (error) {
            console.log("####%%%%%%% ===> ERROR in AUTH %%%%%%###### ---> ", error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {protectRoute}