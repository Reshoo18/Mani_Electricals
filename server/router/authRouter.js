import express from "express"

import {
    login,
    changePassword
} from "../cotrollers/authController.js"

import authMiddleware from "../middlewares/authMiddleware.js"

const authRouter = express.Router()

authRouter.post("/auth/login", login)

authRouter.put(
    "/auth/change-password",
    authMiddleware,
    changePassword
)

export default authRouter