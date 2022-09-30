const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"First Name is required!"],
        minLength: [3,"First Name requires minimum of 3 characters!"]
    },
    lastName: {
        type: String,
        required: [true,"Field is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    email: {
        type: String,
        required: [true,"Email is required!"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"Password is required!"],
        minLength: [7,"Password requires minimum of 7 characters!"]
    },
    
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;