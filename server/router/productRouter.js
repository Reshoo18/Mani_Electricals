import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../cotrollers/productController.js"
import upload from "../middlewares/upload.js"

const router=express.Router()


router.post("/products",upload.single("image"),createProduct)

router.get("/products",getProducts)
router.get("/products/:id",getProduct)
router.put("/products/:id",updateProduct)
router.delete("/products/:id",deleteProduct)
export default router