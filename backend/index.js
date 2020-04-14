const express = require('express')
const route = require('./routes')
const bodyParser = require('body-parser')
const {conn} = require('./src/services/db')

const app = express()
conn.connect()
app.use(bodyParser.urlencoded({extended:false}))
app.use(route)
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server started")
})