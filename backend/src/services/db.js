const mysql = require('mysql')

const conn = mysql.createConnection({
    user:"root",
    password:"1234",
    host:"localhost",
    port:"3306"
})

module.exports = {conn}