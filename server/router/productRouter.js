import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../cotrollers/productController.js"
import upload from "../middlewares/upload.js"
import authMiddleware from "../middlewares/authMiddleware.js"

const router=express.Router()


router.post("/products",authMiddleware,upload.single("image"),createProduct)

router.get("/products",getProducts)
router.get("/products/:id",getProduct)
router.put("/products/:id",authMiddleware, upload.single("image"), updateProduct)
router.delete("/products/:id",authMiddleware,deleteProduct)
export default router