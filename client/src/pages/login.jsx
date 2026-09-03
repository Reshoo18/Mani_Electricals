import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        setError("")
        setLoading(true)

        try {
            const response = await axios.post(
                 "https://mani-electricals.onrender.com/auth/login",
                {
                    email,
                    password
                }
            )

            localStorage.setItem("token", response.data.token)
            navigate("/admin")
        } catch (error) {
            setError(
                error.response?.data?.message || "Login failed"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#030817] flex items-center justify-center px-5">

            <form
                onSubmit={handleLogin}
                className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            >
                <h1 className="mb-2 text-3xl font-black text-[#071126]">
                    Admin Login
                </h1>

                <p className="mb-7 text-slate-500">
                    Login to manage your products
                </p>

                {error && (
                    <div className="mb-5 rounded-lg bg-red-100 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <div className="mb-5">
                    <label className="mb-2 block font-semibold text-slate-700">
                        Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />
                </div>

                <div className="mb-2">
                    <label className="mb-2 block font-semibold text-slate-700">
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />
                </div>

                <div className="mb-6 text-right">
                    <Link
                        to="/forgot-password"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login