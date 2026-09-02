
import cloudinary from "../config/cloudinary.js"
import Product from "../model/Product.js";


export const createProduct =async (req,res)=>{
    try {
        const {name,description,category,details}=req.body
        const file=req.file
        const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        const result = await cloudinary.uploader.upload(base64, {
        resource_type: "image",
});
     const product= await Product.create({
        name,
        description,
        category,
        details,
        image:result.secure_url,
        imagePublicId:result.public_id
     })

     res.status(200).json({message:"product created successfully"})
    } catch (error) {
        res.status(500).json({message:`product is not create ${error}`})
    }
}

export const getProducts=async (req,res)=>{
    try {
        const products=await Product.find()
        res.status(200).json({message:"the all products is here",products})

    } catch (error) {
        res.status(500).json({message:`error in get the all data ${error}`})
    }
}

export const getProduct=async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        res.status(200).json({message:'this is your product',product})
    } catch (error) {
        res.status(500).json({message:`the product is not available ${error}`})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, description, category, details } = req.body
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({ message: "product is not found" })
        }

        let image = product.image
        let imagePublicId = product.imagePublicId

        if (req.file) {
            const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`

            const result = await cloudinary.uploader.upload(base64, {
                resource_type: "image"
            })

            await cloudinary.uploader.destroy(product.imagePublicId)

            image = result.secure_url
            imagePublicId = result.public_id
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                category,
                details,
                image,
                imagePublicId
            },
            { new: true }
        )

        res.status(200).json({
            message: "product updated successfully",
            product: updatedProduct
        })

    } catch (error) {
        res.status(500).json({
            message: `error in updating product ${error.message}`
        })
    }
}


export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id

        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({
                message: "product is not available"
            })
        }

        await cloudinary.uploader.destroy(product.imagePublicId)

        await Product.findByIdAndDelete(id)

        res.status(200).json({
            message: "product is deleted successfully",
            product
        })

    } catch (error) {
        res.status(500).json({
            message: `error while deleting the product ${error.message}`
        })
    }
}