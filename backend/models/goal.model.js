const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
    {
        // every user that creates a goal needs to have a user id attached to it
    user: {
        type: mongoose.Schema.Types.ObjectId,
        rquired: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true,"Text is required!"],
        minLength: [3,"Text requires minimum of 3 characters!"]
    },
    
}, {timestamps: true});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;