import UserModel from "../models/User.js"

import { generateUsername } from "unique-username-generator/dist/index.js";

const findUserWithGivenUserName = async(user_name) => {

    const user = await UserModel.findOne({user_name})
    if (user) {
        return true
    }
    else {
        return false
    }
}

const generateRandomUserName = async() => {
    const username = generateUsername(
        "",
        3,
        15
      );
      
    const userPresence = await findUserWithGivenUserName(username)

      if (userPresence) {
        console.log("User is already present")
      } else {
        return username
      }

}

export default generateRandomUserName