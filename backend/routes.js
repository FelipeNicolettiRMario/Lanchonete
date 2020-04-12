const {Router} = require('express')
const snack  = require('./src/snack')

const routes = Router()

routes.get("/snacks",snack.index)

module.exports = routes