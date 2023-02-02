import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// routes 
import userAuthRoutes from './routes/userAuthRoutes.js'


import connectdb from './config/connectdb.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())
app.use(cookieParser())
app.use(express.json())

// load routes 
app.use("/api/v1/user", userAuthRoutes)

// connect to database 
connectdb(DATABASE_URL)


app.listen(port, () => {
    console.log(`Beep Boop`)
})