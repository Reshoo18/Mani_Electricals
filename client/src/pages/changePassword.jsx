import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match")
            return
        }

        if (newPassword.length < 6) {
            alert("New password must be at least 6 characters")
            return
        }

        try {
            setLoading(true)

            const token = localStorage.getItem("token")

            await axios.put(
                "http://localhost:8000/auth/change-password",
                {
                    oldPassword,
                    newPassword
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert("Password changed successfully. Please login again.")

            localStorage.removeItem("token")
            navigate("/login")
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Failed to change password"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030817] px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

                <h1 className="text-3xl font-black text-[#071126]">
                    Change Password
                </h1>

                <p className="mt-2 text-slate-500">
                    Update your admin account password
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <div>
                        <label className="mb-2 block font-bold text-[#071126]">
                            Old Password
                        </label>

                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) =>
                                setOldPassword(e.target.value)
                            }
                            placeholder="Enter old password"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-bold text-[#071126]">
                            New Password
                        </label>

                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(e.target.value)
                            }
                            placeholder="Enter new password"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-bold text-[#071126]">
                            Confirm New Password
                        </label>

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="Confirm new password"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "Changing..." : "Change Password"}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/admin")}
                        className="w-full rounded-lg border-2 border-slate-300 px-5 py-3 font-bold text-slate-700"
                    >
                        Cancel
                    </button>

                </form>

            </div>

        </div>
    )
}

export default ChangePassword