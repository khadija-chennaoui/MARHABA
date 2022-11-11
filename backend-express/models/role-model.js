const mongoose = require('mongoose')
const db = require('../db/db')
const RoleSchema = mongoose.Schema({
    name:{
        type : String,
        require: true
    }
})
const role = mongoose.model('role',RoleSchema)
module.exports = role
