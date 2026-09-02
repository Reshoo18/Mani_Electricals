import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const EditProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [oldImage, setOldImage] = useState("")
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/products/${id}`
                )

                const product = response.data.product

                setName(product.name)
                setCategory(product.category)
                setDescription(product.description)
                setOldImage(product.image)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProduct()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setUpdating(true)

            const formData = new FormData()

            formData.append("name", name)
            formData.append("category", category)
            formData.append("description", description)

            if (image) {
                formData.append("image", image)
            }

            await axios.put(
                `http://localhost:8000/products/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            navigate("/admin")

        } catch (error) {
            console.log(error)
        } finally {
            setUpdating(false)
        }
    }

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-100 px-6 py-10">

            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

                <h1 className="text-3xl font-black text-[#071126]">
                    Edit Product
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3"
                        required
                    />

                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3"
                        required
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3"
                        rows="5"
                        required
                    />

                    {oldImage && (
                        <img
                            src={oldImage}
                            alt={name}
                            className="h-40 w-full rounded-lg object-contain bg-slate-100"
                        />
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full rounded-lg border p-3"
                    />

                    <div className="flex gap-3">

                        <button
                            type="button"
                            onClick={() => navigate("/admin")}
                            className="flex-1 rounded-lg border-2 border-slate-300 px-5 py-3 font-bold"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={updating}
                            className="flex-1 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white"
                        >
                            {updating ? "Updating..." : "Update Product"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default EditProduct