import express from "express"

import {
    login,
    changePassword,
    forgotPassword,
    resetPassword
} from "../cotrollers/authController.js"

import authMiddleware from "../middlewares/authMiddleware.js"

const authRouter = express.Router()

authRouter.post("/auth/login", login)

authRouter.post("/auth/forgot-password", forgotPassword)

authRouter.put("/auth/reset-password", resetPassword)

authRouter.put(
    "/auth/change-password",
    authMiddleware,
    changePassword
)

export default authRouter