import axios from "axios"

const productApi=async()=>{
    try {
        const response= await axios.get("https://mani-electricals.onrender.com/products")
        return response.data.products
    } catch (error) {
        console.log(error)
    }
}
export default productApi