const {Schema} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    eamil: {
        type: String,
        required: true,
        uniqe: true,
    },

    password: {
        type: String,
        required: true,
    }
})

module.exports = {UserSchema};