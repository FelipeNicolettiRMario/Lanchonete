const express = require('express')
const {conn} = require('./services/db')

function index(req,res) {
    queryString = "SELECT * FROM Lanchonete.LNC_LANCHE"

    const queryResponse = conn.query(queryString,function(err, rows, fields) {
        if(!err){
            return res.json({result:rows})
        }
        else{
            console.log("unexpected error")
        }
        
    })

}

module.exports = {index}