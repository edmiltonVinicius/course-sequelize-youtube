import express from 'express'

const app = express()
const port = process.env.PORT || 8080

import cookieParser from 'cookie-parser'
import cors from 'cors'
import routes  from './routes/routes.js'

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('Server running in port ' + port))