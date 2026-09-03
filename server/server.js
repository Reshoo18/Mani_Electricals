import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
import router from "./router/productRouter.js"
import authRouter from "./router/authRouter.js"
import enquiryRouter from "./router/enquiryRouter.js"

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 5000
app.use(router)
app.use(authRouter)
app.use(enquiryRouter)


app.get("/",(req,res)=>{
    res.send("hello i am mani el server")
})

const startServer = async () => {
    try {
        await connectdb()

        app.listen(PORT, () => {
            console.log(`server at listening at this port : ${PORT}`)
        })
    } catch (error) {
        console.log("Server failed to start:", error.message)
    }
}

startServer()