const {Router} = require('express')
const snack  = require('./src/controllers/snackController')

const routes = Router()

routes.get("/snacks",snack.index)
routes.post("/snacks",snack.insert)

module.exports = routes