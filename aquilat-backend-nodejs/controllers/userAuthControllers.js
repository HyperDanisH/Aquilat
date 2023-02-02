import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserModel from '../models/User.js'

// for bcrypt algoridhm
const saltRounds = 10

const registerNewUser = async(req, res) => {
    try {
        const {name, email, password, date_of_birth} = req.body;
    
        const user = await UserModel.findOne({email})
        if(user){

            res.send({status: 0, message: "User already exists"})

        }else {
            if(name && email && date_of_birth, password){

                const salt = await bcrypt.genSalt(saltRounds)
                const hashedPassword = await bcrypt.hash(password, salt)
                const doc = new UserModel({
                    name: name,
                    email: email,
                    password: hashedPassword,
                    date_of_birth: date_of_birth
                })
                await doc.save()
                //Genereate JWT
                const token = jwt.sign({userId: doc._id}, process.env.JWT_SECRET, {expiresIn: '5d'})
                
                res.cookie('jwt', token)
                res.send({doc, token})


            }else {
                res.send({status: 0, message: "All fields required"})
            }

        }
    } catch (error) {
        console.log(error)
    }
}



const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const token = req.cookies.jwt

        if (token) {
            res.send({
                    status: 0,
                    message: "You're already signed in"
                })
            return
        }


        if(email && password) {
            const user = await UserModel.findOne({email})
            if(user) {
                const isPasswordMatched = await bcrypt.compare(password, user.password)
                if((user.email === email) && isPasswordMatched) {
                    //Generate token
                    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '5d'})

                    res.cookie("jwt", token)
                    res.send({status: 1, message: "You're signed in", "token": token})
                } else {
                    res.send({status: 0, message: "Invalid credentials"})
                }
            }else {
                res.send({status: 0, message: "Invalid credentials"})
            }
        }else {
            res.send({status: 0, message: "All fields required"})
        }

    } catch (error) {
        console.log(error)
    }
}

export {registerNewUser, loginUser}

