const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

// desc Register new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async(req,res) => {
    const {firstName, lastName, email, password} = req.body
    if(!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    // generate salt
    const salt = await bcrypt.genSalt(10) 
    const hashedPassword = await bcrypt.hash(password,salt)

    // create user
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    })
    console.log("new user ===>", user)

    if(user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateJWTToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
// desc login user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body
    // check for email
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: generateJWTToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})
// desc get current logged in user
// @route GET /api/users/id
// @access Private - protected route
const getLoggedInUser = asyncHandler(async(req,res) => {
    const { _id, firstName, lastName, email } = await User.findById(req.user.id)

    res.status(200).json({
        id : _id,
        firstName : firstName,
        lastName : lastName,
        email : email
    })

})


// Generate JWT
const generateJWTToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '30d'
    })
}


module.exports = {
    registerUser, 
    loginUser,
    getLoggedInUser
}