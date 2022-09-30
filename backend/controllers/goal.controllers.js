const asyncHandler = require('express-async-handler')
const Goal = require('../models/goal.model')
const User = require('../models/user.model')


// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({user : req.user.id})
    res.status(200).json(goals)
})


// @desc create goals
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async(req, res) => {
    console.log(req.body)
    // checking if our model requirements such as "text" is met before creating
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})



// @desc update goals
// @route GET /api/goals
// @access Private
const updateGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new : true})

    res.status(200).json(updatedGoal)
})



// @desc delete goals
// @route GET /api/goals
// @access Private
const deleteGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    // make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    
    await goal.remove()

    res.status(200).json({id : req.params.id})
})




module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal

}