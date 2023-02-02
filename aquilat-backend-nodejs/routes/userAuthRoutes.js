import express from "express";
const router = express.Router()

// imports controllers 
import {loginUser, registerNewUser} from "../controllers/userAuthControllers.js"

router.post("/register", registerNewUser)

router.post("/login", loginUser)

export default router;