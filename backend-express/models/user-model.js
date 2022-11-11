const mongoose = require('mongoose')
const db =require('../db/db')
const UserSchema = mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    email :{
        type:String, 
        require:true
    },
    password :{
        type:String,
        require:true
    },
    role : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref :"role"
        }
    ],


})
const user = mongoose.model('user',UserSchema )
module.exports = user