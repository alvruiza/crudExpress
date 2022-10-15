const express = require("express")
const router= require('./routes/index')
require('dotenv').config()

const app = express()

const port = process.env.PORT || 4000 

app.use(express.json())

app.use('/api', router)

app.listen(port,'0.0.0.0' ,()=> console.log("server listening on port " + port ))

