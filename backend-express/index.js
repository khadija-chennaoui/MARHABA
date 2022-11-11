const express =require('express')
const app =express()
require('dotenv').config()
const db = require('./db/db')
const route = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Route
app.use('/api/auth',route)






// Connection avec DB 
db.then(()=>{console.log('connected')})
.catch((error)=>{console.log(error)})
// PORT
const port =process.env.PORT
app.listen(port)