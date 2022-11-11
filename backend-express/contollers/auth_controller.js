const user = require('../models/user-model')
const role = require('../models/role-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { create } = require('../models/user-model')

//Creation de function de Register

const Register = async(req,res) =>{
    const {body}=req
    const User = await user.findOne({email:body.email})
    if(User) return res.send('user exist already')
    const pass = await bcrypt.hash(body.password,10)
    body.password =  pass
    const creat = await user.create({...body ,role:"636d379e39dd81803b053c90"})
    if(!creat) return res.send('Not created')
    res.json({message:'created',data:creat})

}



module.exports = {
    Register,
   
}