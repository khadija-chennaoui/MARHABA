const route = require('express').Router()
const user = require('../contollers/auth_controller')

route.post('/register',user.Register)
// route.post('/role',user.Role)


module.exports = route ;