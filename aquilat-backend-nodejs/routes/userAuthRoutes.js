import express from "express";
const router = express.Router()

// imports controllers 
import {loginUser, registerNewUser, loggedUser} from "../controllers/userAuthControllers.js"

//importing middleware
import checkUserAuth from "../middlewares/auth-middlewar.js";

//auth middleware setup at private routes
router.use("/loggeduser", checkUserAuth)

router.post("/register", registerNewUser)
router.post("/login", loginUser)

//private routes
router.get("/loggeduser", loggedUser)

export default router;