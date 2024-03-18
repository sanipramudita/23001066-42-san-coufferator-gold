const express = require('express')
const router = require('./route')
const app = express()
const port = 8000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(router)
app.listen (port, () => console.log(`server running on port ${port}`))