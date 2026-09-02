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
            <div className="flex min-h-screen items-center justify-center bg-[#030817] text-white">
                Loading...
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-100">

            <header className="bg-[#07143d] px-6 py-5 text-white shadow-lg">
                <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-black">
                            Mani Electricals
                        </h1>

                        <p className="text-sm text-blue-200">
                            Admin Dashboard
                        </p>
                    </div>

                    <button
    onClick={() => navigate("/admin/change-password")}
    className="rounded-lg bg-blue-600 px-5 py-2.5 font-bold transition hover:bg-blue-700"
>
    Change Password
</button>

                    <button
                        onClick={handleLogout}
                        className="rounded-lg bg-red-500 px-5 py-2.5 font-bold transition hover:bg-red-600"
                    >
                        Logout
                    </button>

                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-10">

                <div className="mb-8 flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-black text-[#071126]">
                            Products
                        </h2>

                        <p className="mt-1 text-slate-500">
                            Manage your electrical products
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/admin/products/add")}
                        className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
                    >
                        + Add Product
                    </button>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="overflow-hidden rounded-2xl bg-white shadow-md"
                        >

                            <div className="h-52 bg-slate-100 p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="p-5">

                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                    {product.category}
                                </p>

                                <h3 className="mt-2 text-xl font-black text-[#071126]">
                                    {product.name}
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    {product.description}
                                </p>

                                <div className="mt-5 flex gap-3">

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/admin/products/edit/${product._id}`
                                            )
                                        }
                                        className="flex-1 rounded-lg border-2 border-blue-600 px-4 py-2.5 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                        className="flex-1 rounded-lg bg-red-500 px-4 py-2.5 font-bold text-white transition hover:bg-red-600"
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