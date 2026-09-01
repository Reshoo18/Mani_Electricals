import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectdb from "./config/db.js"
import router from "./router/productRouter.js"
dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 5000
app.use(router)

app.get("/",(req,res)=>{
    res.send("hello i am mani el server")
})

app.listen(PORT,()=>{
    connectdb()
    console.log(`server at listening at this port : ${PORT}`)
})