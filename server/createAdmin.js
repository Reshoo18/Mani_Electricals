import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import connectdb from "./config/db.js"
import User from "./model/User.js"

dotenv.config()

const createAdmin = async () => {
    try {
        await connectdb()

        const hashedPassword = await bcrypt.hash("12345678", 10)

        await User.create({
            name: "Reshoo",
            email: "reshooranjan7@gmail.com",
            password: hashedPassword
        })

        console.log("owner created successfully")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

createAdmin()