import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [step, setStep] = useState(1)
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSendOTP = async (e) => {
        e.preventDefault()

        setError("")
        setMessage("")
        setLoading(true)

        try {
            const response = await axios.post(
                "http://localhost:8000/auth/forgot-password",
                { email }
            )

            setMessage(response.data.message)
            setStep(2)
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to send OTP"
            )
        } finally {
            setLoading(false)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()

        setError("")
        setMessage("")
        setLoading(true)

        try {
            const response = await axios.put(
                "http://localhost:8000/auth/reset-password",
                {
                    email,
                    otp: otp.trim(),
                    newPassword
                }
            )

            setMessage(response.data.message)

            setTimeout(() => {
                navigate("/login")
            }, 1500)
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to reset password"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#030817] flex items-center justify-center px-5">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

                <h1 className="text-3xl font-black text-[#071126]">
                    Forgot Password
                </h1>

                <p className="mt-2 mb-7 text-slate-500">
                    {step === 1
                        ? "Enter your email to receive an OTP"
                        : "Enter the OTP and your new password"}
                </p>

                {message && (
                    <div className="mb-5 rounded-lg bg-green-100 p-3 text-sm text-green-700">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-5 rounded-lg bg-red-100 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                {step === 1 ? (
                    <form onSubmit={handleSendOTP}>

                        <label className="mb-2 block font-semibold text-slate-700">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="mb-6 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-60"
                        >
                            {loading ? "Sending OTP..." : "Send OTP"}
                        </button>

                    </form>
                ) : (
                    <form onSubmit={handleResetPassword}>

                        <label className="mb-2 block font-semibold text-slate-700">
                            OTP
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            value={otp}
                            onChange={(e) =>
                                setOtp(e.target.value.replace(/\D/g, ""))
                            }
                            placeholder="Enter 6 digit OTP"
                            maxLength={6}
                            required
                            className="mb-5 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />

                        <label className="mb-2 block font-semibold text-slate-700">
                            New Password
                        </label>

                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter new password"
                            minLength={6}
                            required
                            className="mb-6 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />

                        <button
                            type="submit"
                            disabled={loading || otp.length !== 6}
                            className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-60"
                        >
                            {loading
                                ? "Resetting Password..."
                                : "Reset Password"}
                        </button>

                    </form>
                )}

                <div className="mt-6 text-center">
                    <Link
                        to="/login"
                        className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                        ← Back to Login
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword