import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// routes 
import userAuthRoutes from './routes/userAuthRoutes.js'
import userActivityRoutes from './routes/userActivityRoutes.js'


import connectdb from './config/connectdb.js'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Headers", "http://localhost:3000");
  next();
})
app.use(cookieParser())
app.use(express.json())

// load routes 
app.use("/api/v1/user", userAuthRoutes)
app.use("/api/v1/userActivity", userActivityRoutes)

// connect to database 
connectdb(DATABASE_URL)


app.listen(port, () => {
    console.log(`Beep Boop`)
})