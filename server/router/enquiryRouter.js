import express from "express"
import { sendEnquiry } from "../cotrollers/enquiryContrller.js"

const enquiryRouter = express.Router()

enquiryRouter.post("/enquiry", sendEnquiry)

export default enquiryRouter