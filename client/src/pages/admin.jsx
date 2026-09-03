import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Admin = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/login")
            return
        }

        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/products"
                )

                setProducts(response.data.products)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [token, navigate])

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        )

        if (!confirmDelete) return

        try {
            await axios.delete(
                `http://localhost:8000/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setProducts(
                products.filter((product) => product._id !== id)
            )
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#030817] px-4 text-white">
                Loading...
            </div>
        )
    }

    return (
        <div className="min-h-screen overflow-x-hidden bg-slate-100">

            <header className="bg-[#07143d] px-4 py-4 text-white shadow-lg sm:px-6 sm:py-5">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h1 className="text-xl font-black sm:text-2xl">
                            Mani Electricals
                        </h1>

                        <p className="text-xs text-blue-200 sm:text-sm">
                            Admin Dashboard
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">

                        <button
                            onClick={() =>
                                navigate("/admin/change-password")
                            }
                            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold transition hover:bg-blue-700 sm:w-auto sm:px-5"
                        >
                            Change Password
                        </button>

                        <button
                            onClick={handleLogout}
                            className="w-full rounded-lg bg-red-500 px-4 py-2.5 text-sm font-bold transition hover:bg-red-600 sm:w-auto sm:px-5"
                        >
                            Logout
                        </button>

                    </div>

                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">

                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h2 className="text-2xl font-black text-[#071126] sm:text-3xl">
                            Products
                        </h2>

                        <p className="mt-1 text-sm text-slate-500 sm:text-base">
                            Manage your electrical products
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            navigate("/admin/products/add")
                        }
                        className="w-full rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
                    >
                        + Add Product
                    </button>

                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="overflow-hidden rounded-2xl bg-white shadow-md"
                        >

                            <div className="h-48 bg-slate-100 p-4 sm:h-52">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="p-4 sm:p-5">

                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                    {product.category}
                                </p>

                                <h3 className="mt-2 break-words text-lg font-black text-[#071126] sm:text-xl">
                                    {product.name}
                                </h3>

                                <p className="mt-2 break-words text-sm text-slate-500">
                                    {product.description}
                                </p>

                                <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/admin/products/edit/${product._id}`
                                            )
                                        }
                                        className="w-full rounded-lg border-2 border-blue-600 px-4 py-2.5 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:flex-1"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                        className="w-full rounded-lg bg-red-500 px-4 py-2.5 font-bold text-white transition hover:bg-red-600 sm:flex-1"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </main>

        </div>
    )
}

export default Admin