import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import User from "../model/User.js"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

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

        user.password = await bcrypt.hash(newPassword, 10)

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

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString()

        user.resetOTP = otp
        user.resetOTPExpire = new Date(
            Date.now() + 10 * 60 * 1000
        )

        await user.save()

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Mani Electricals - Password Reset OTP",
            html: `
                <div style="font-family:Arial;padding:20px">
                    <h2>Mani Electricals & Electronics</h2>
                    <p>Your password reset OTP is:</p>
                    <h1 style="letter-spacing:8px">${otp}</h1>
                    <p>This OTP is valid for 10 minutes.</p>
                    <p>If you did not request this, please ignore this email.</p>
                </div>
            `
        })

        res.status(200).json({
            message: "OTP sent successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: `error sending OTP ${error.message}`
        })
    }
}

export const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }

        const enteredOTP = String(otp).trim()

        if (
            String(user.resetOTP).trim() !== enteredOTP ||
            !user.resetOTPExpire ||
            user.resetOTPExpire.getTime() < Date.now()
        ) {
            return res.status(400).json({
                message: "invalid or expired OTP"
            })
        }

        user.password = await bcrypt.hash(newPassword, 10)
        user.resetOTP = undefined
        user.resetOTPExpire = undefined

        await user.save()

        res.status(200).json({
            message: "password reset successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: `error resetting password ${error.message}`
        })
    }
}