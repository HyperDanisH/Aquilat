import express from "express";
const router = express.Router()

// imports controllers 
import { findUsers } from "../controllers/userActivityControllers.js";

//importing middleware
import checkUserAuth from "../middlewares/auth-middlewar.js";

//auth middleware setup at private routes
router.use("/findUsers", checkUserAuth)

router.get("/findUsers/:userData", findUsers)



export default router;