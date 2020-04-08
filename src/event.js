const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: {type: String},
    firstname: String,
    lastname: String

});



module.exports = mongoose.model('Event', userSchema);