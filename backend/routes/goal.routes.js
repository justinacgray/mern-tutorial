const express = require("express") //common js syntax
const router = express.Router()
const {getGoals, createGoal, updateGoal, deleteGoal} = require("../controllers/goal.controllers")

router.get("/", getGoals)

router.post("/", createGoal)

router.put("/:id", updateGoal)

router.delete("/:id", deleteGoal)



module.exports = router