const express = require('express')
const route = require('./routes')
const {conn} = require('./src/services/db')

const app = express()
conn.connect()
app.use(route)
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server started")
})