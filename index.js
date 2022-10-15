const express = require("express")
const router= require('./routes/index')
require('dotenv').config()

const app = express()

const port = 4000

app.use(express.json())

app.use('/api', router)

app.listen(port, ()=> console.log("server listening on port " + port ))

