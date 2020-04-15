const {Router} = require('express')
const snack  = require('./src/controllers/snackController')

const routes = Router()

routes.get("/snacks",snack.index)
routes.post("/snack",snack.insert)
routes.get("/snack",snack.selectOne)

module.exports = routes