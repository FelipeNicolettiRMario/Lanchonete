const express = require('express')
const {conn} = require('../services/db')

function index(req,res) {
    queryString = "SELECT * FROM Lanchonete.LNC_LANCHE"

    conn.query(queryString,function(err, rows, fields) {
        if(!err){
            return res.json({result:rows})
        }
        else{
            console.log("unexpected error")
        }
        
    })

}

function insert(req,res){

    const {name,description,price,ingredients} = req.body
    queryString = `INSERT INTO Lanchonete.LNC_LANCHE(LNC_NOME,LNC_DESCRICAO,LNC_PRECO,LNC_INGREDIENTES) VALUES ("${name}","${description}",${price},"${ingredients}")`

    conn.query(queryString,function(err, rows, fields) {
        if(!err){
            return res.json({result:rows})
        }
        else{
            console.log(err)
        }
        
    })
}


function selectOne(req,res){

    const {searchParam} = req.body

    
        queryString = `SELECT * FROM Lanchonete.LNC_LANCHE where LNC_ID = ${parseInt(searchParam)}`

        if(isNaN(parseInt(searchParam)))
        {
            queryString = `SELECT * FROM Lanchonete.LNC_LANCHE where LNC_NOME = '${searchParam}'`
        }
 
    conn.query(queryString,function(err, rows, fields) {
        if(!err){
            return res.json({result:rows})
        }
        else{
            console.log(err)
        }
        
    })
}

module.exports = {index,insert,selectOne}