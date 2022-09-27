const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true,"Text is required!"],
        minLength: [3,"Text requires minimum of 3 characters!"]
    },
    
}, {timestamps: true});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;