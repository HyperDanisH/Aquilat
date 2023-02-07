
import UserModel from '../models/User.js'

const findUsers = async(req, res) => {
    try {
        const userInput = req.params.userData


        const usersFoundWithNameEntered = await UserModel.find({ 
            name: { $regex: `.*${userInput}.*`, 
            $options: "i" } 
        }).select("-password").select("-_id").select("-date_of_birth").limit(5)
        
        if(usersFoundWithNameEntered.length > 0) {
            res.status(200).send({status: 1, message: "Some user found", data: usersFoundWithNameEntered})
            return

        }else {
            res.send({status: 0, message: "No such user found"})
            return

        }

    } catch (error) {
        res.status(400).send({status: 0, message: error.message})
        return

    }
}

export { findUsers }