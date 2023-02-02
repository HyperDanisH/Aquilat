import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";

const checkUserAuth = async(req, res, next) => {
    const { authorization } = req.headers
    if(authorization && authorization.startsWith('Bearer')) {
        const token = authorization.split(' ')[1]
        if(!token){
            res.send({status: 0, message: "Token required"})
        }
        console.log(token)
        try {
            const { userId } = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await UserModel.findById(userId).select("-password")
            next()
        } catch (error) {
            res.send({status: 0, message: error.message})
        }
    }else {
        res.send({status: 0, message: "Not authorized"})
    }
}

export default checkUserAuth