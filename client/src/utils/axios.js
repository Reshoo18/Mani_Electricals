import axios from "axios"

const productApi=async()=>{
    try {
        const response= await axios.get("http://localhost:8000/products")
        return response.data.products
    } catch (error) {
        console.log(error)
    }
}
export default productApi