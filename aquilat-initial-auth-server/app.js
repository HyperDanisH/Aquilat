import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get("/", (req, res) => {
    const token = req.cookies.jwt 
    console.log(token)

    if(token) {
        try {
            const { userId } = jwt.verify(token, process.env.JWT_SECRET)
            if(userId) {
                console.log("200 send and userId was found")
                return res.status(200).send()
            }
            else {
                console.log("403 send and userId was not found")
                return res.status(403).send()
                
            }
        } catch (error) {
            console.log("403 send and there was and error")
            console.log(error)
            return res.status(403).send()
        }
    }
    else {
        console.log("403 was send and token wasn't found")
        return res.status(403).send()

    }
})

app.listen(process.env.PORT, () => {
    console.log("The auth server has started")
})
