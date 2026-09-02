import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../model/User.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "invalid password"
            })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        res.status(200).json({
            message: "login successful",
            token
        })
    } catch (error) {
        res.status(500).json({
            message: `error in login ${error.message}`
        })
    }
}

export const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body

        const user = await User.findById(req.user.id)

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const isMatch = await bcrypt.compare(
            oldPassword,
            user.password
        )

        if (!isMatch) {
            return res.status(400).json({
                message: "old password is incorrect"
            })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10)

        user.password = hashedPassword

        await user.save()

        res.status(200).json({
            message: "password changed successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: `error in changing password ${error.message}`
        })
    }
}