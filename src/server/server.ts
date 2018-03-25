import * as express from 'express'
import * as bodyParser from 'body-parser'
import {api} from './routes/api/api'

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

app.use('/api', api)

app.listen(port)
console.log(`Things server listening on port ${port}`)