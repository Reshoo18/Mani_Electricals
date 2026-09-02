import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        details: ""
    })

    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!image) {
            alert("Please select an image")
            return
        }

        try {
            setLoading(true)

            const token = localStorage.getItem("token")

            const data = new FormData()

            data.append("name", formData.name)
            data.append("category", formData.category)
            data.append("description", formData.description)
            data.append("details", formData.details)
            data.append("image", image)

            await axios.post(
                "http://localhost:8000/products",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert("Product added successfully")

            navigate("/admin")
        } catch (error) {
            console.log(error)

            alert(
                error.response?.data?.message ||
                "Product could not be added"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-100">

            <header className="bg-[#07143d] px-6 py-5 text-white shadow-lg">
                <div className="mx-auto max-w-7xl">

                    <h1 className="text-2xl font-black">
                        Mani Electricals
                    </h1>

                    <p className="text-sm text-blue-200">
                        Admin Dashboard
                    </p>

                </div>
            </header>

            <main className="mx-auto max-w-3xl px-6 py-10">

                <div className="rounded-2xl bg-white p-8 shadow-lg">

                    <div className="mb-8">
                        <h2 className="text-3xl font-black text-[#071126]">
                            Add Product
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Add a new electrical product
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>
                            <label className="mb-2 block font-bold text-[#071126]">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-bold text-[#071126]">
                                Category
                            </label>

                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Enter category"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-bold text-[#071126]">
                                Description
                            </label>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter short description"
                                rows="4"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-bold text-[#071126]">
                                Details
                            </label>

                            <textarea
                                name="details"
                                value={formData.details}
                                onChange={handleChange}
                                placeholder="Enter complete product details"
                                rows="5"
                                required
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-bold text-[#071126]">
                                Product Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="w-full rounded-lg border border-slate-300 p-3"
                            />
                        </div>

                        <div className="flex gap-4 pt-4">

                            <button
                                type="button"
                                onClick={() => navigate("/admin")}
                                className="flex-1 rounded-lg border-2 border-slate-300 px-5 py-3 font-bold text-slate-700 hover:bg-slate-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Adding..." : "Add Product"}
                            </button>

                        </div>

                    </form>

                </div>

            </main>

        </div>
    )
}

export default AddProduct