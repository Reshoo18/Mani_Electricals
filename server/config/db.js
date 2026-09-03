import mongoose from "mongoose"

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connected")
    } catch (error) {
        console.log("DB connection error:", error.message)
        throw error
    }
}

export default connectdb