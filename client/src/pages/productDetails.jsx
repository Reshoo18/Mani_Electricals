import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/products/${id}`
                )

                setProduct(response.data.product)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg font-semibold">Product not found</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-6xl">

                <button
                    onClick={() => navigate("/products")}
                    className="mb-8 font-semibold text-blue-600 hover:text-blue-800"
                >
                    ← Back to Products
                </button>

                <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

                    <div className="flex min-h-[450px] items-center justify-center bg-slate-50 p-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-[420px] w-full object-contain"
                        />
                    </div>

                    <div className="p-8 md:p-12">

                        <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                            {product.category}
                        </p>

                        <h1 className="mt-3 text-4xl font-black text-[#071126]">
                            {product.name}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            {product.description}
                        </p>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-[#071126]">
                                Product Details
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                {product.details}
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/contact")}
                            className="mt-8 rounded-xl bg-blue-600 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
                        >
                            Request a Quote
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDetails