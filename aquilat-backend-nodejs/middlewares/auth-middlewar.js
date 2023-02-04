import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";

const checkUserAuth = async(req, res, next) => {

    const token = req.cookies.jwt

        if(!token){
            res.status(403).send({status: 0, message: "Token ain't found"})
            return
        }

        try {
            const { userId } = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await UserModel.findById(userId).select("-password")

            next()
        } catch (error) {
            res.status(403).send({status: 0, message: error.message})
            return
        }

}

export default checkUserAuth