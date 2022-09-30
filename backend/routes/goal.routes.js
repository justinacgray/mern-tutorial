const express = require("express") //common js syntax
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require("../controllers/goal.controllers")
const {protectRoute} = require("../middleware/authMiddleware")

router.get("/", protectRoute, getGoals)
router.post("/", protectRoute,  createGoal)
router.put("/:id", protectRoute, updateGoal)
router.delete("/:id",protectRoute,  deleteGoal)

// OR another way of doing if they are the same routes but different requests is this
// router.route('/').get(getGoal).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)



module.exports = router