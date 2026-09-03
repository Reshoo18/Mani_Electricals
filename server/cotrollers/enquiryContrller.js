import nodemailer from "nodemailer"

export const sendEnquiry = async (req, res) => {
    try {
        const {
            name,
            company,
            email,
            phone,
            requirement
        } = req.body

        if (!name || !email || !phone || !requirement) {
            return res.status(400).json({
                message: "Please fill all required fields"
            })
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `New Enquiry from ${name}`,
            html: `
                <h2>New Website Enquiry</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || "Not provided"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <h3>Requirement</h3>
                <p>${requirement}</p>
            `
        })

        res.status(200).json({
            message: "Enquiry sent successfully"
        })
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Failed to send enquiry"
        })
    }
}