import UserModel from "../models/User.js"

import { generateFromEmail } from "unique-username-generator";

const findUserWithGivenUserName = async(user_name) => {

    const user = await UserModel.findOne({user_name})
    if (user) {
        return true
    }
    else {
        return false
    }
}

const generateRandomUserName = async(email) => {
    const username = generateFromEmail(
        email,
        3
      );
      
    const userPresence = await findUserWithGivenUserName(username)

      if (userPresence) {
        console.log("User is already present")
      } else {
        return username
      }

}

export default generateRandomUserName