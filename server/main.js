import express from 'express'
import path from 'path'
import url from 'url'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import router from './routes/members.route.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({
    path: path.resolve(__dirname, './.env')
})

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const uri = process.env.DB_URI
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB connected')
})

app.use('/api/members', router)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})