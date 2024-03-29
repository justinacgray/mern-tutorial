const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require('./config/mongoose.config')
const port = process.env.PORT || 7000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require("./routes/goal.routes"))
app.use('/api/user', require("./routes/user.routes"))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))