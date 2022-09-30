const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getLoggedInUser} = require('../controllers/user.controller')
const {protectRoute} = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/:id', protectRoute, getLoggedInUser)



module.exports = router 