require('./database/index.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cookieParser = require('cookie-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(port, () => console.log('Server running in port ' + port))