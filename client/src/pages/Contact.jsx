import React, { useState } from "react"
import axios from "axios"
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            const response = await axios.post(
                "http://localhost:8000/enquiry",
                formData
            )

            alert(response.data.message)

            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                requirement: "",
            })
        } catch (error) {
            console.log(error)

            alert(
                error.response?.data?.message ||
                "Failed to send enquiry"
            )
        } finally {
            setLoading(false)
        }
    }

    const contactInfo = [
        {
            icon: FaPhoneAlt,
            title: "Phone",
            subtitle: "Speak with our team",
            content: (
                <>
                    <a
                        href="tel:+918235634151"
                        className="block break-all transition-colors duration-300 hover:text-yellow-400"
                    >
                        +91 8235634151
                    </a>

                    <a
                        href="tel:+919431331490"
                        className="mt-1 block break-all transition-colors duration-300 hover:text-yellow-400"
                    >
                        +91 9431331490
                    </a>
                </>
            ),
        },
        {
            icon: FaEnvelope,
            title: "Email",
            subtitle: "Send us your requirement",
            content: (
                <>
                    <a
                        href="mailto:mee.ranchi25@gmail.com"
                        className="block break-all transition-colors duration-300 hover:text-yellow-400"
                    >
                        mee.ranchi25@gmail.com
                    </a>

                    <a
                        href="mailto:mee.ranchi25@yahoo.com"
                        className="mt-1 block break-all transition-colors duration-300 hover:text-yellow-400"
                    >
                        mee.ranchi25@yahoo.com
                    </a>
                </>
            ),
        },
        {
            icon: FaMapMarkerAlt,
            title: "Address",
            subtitle: "Our location",
            content: (
                <p className="text-sm leading-7 sm:text-base">
                    Plot No. 539, Sunder Nagar, Road No. 2,
                    Devidarsan Rd, Getlatu, Ranchi,
                    Jharkhand - 835 217
                </p>
            ),
        },
    ]

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 py-16 text-white sm:py-20 lg:py-28"
        >
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl sm:h-96 sm:w-96" />

            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">

                        <span className="h-[2px] w-7 bg-yellow-400 sm:w-12" />

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-yellow-400 sm:text-sm sm:tracking-[0.18em]">
                            Contact Us
                        </p>

                        <span className="h-[2px] w-7 bg-yellow-400 sm:w-12" />

                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                        Let's Build
                        <span className="text-yellow-400"> Better </span>
                        Solutions
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">
                        Contact Mani Electricals & Electronics for product
                        enquiries, electrical testing requirements,
                        transformer services and quotations.
                    </p>

                </div>

                {/* Main Content */}

                <div className="mt-10 grid gap-8 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

                    {/* Left Side */}

                    <div className="space-y-4 sm:space-y-5">

                        {contactInfo.map((item, index) => {

                            const Icon = item.icon

                            return (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-white/[0.11] sm:rounded-3xl sm:p-7"
                                >

                                    <div className="flex items-start gap-4 sm:gap-5">

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-blue-950 shadow-lg shadow-yellow-500/20 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl">
                                            <Icon className="text-base sm:text-xl" />
                                        </div>

                                        <div className="min-w-0 flex-1">

                                            <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 sm:text-xs">
                                                {item.subtitle}
                                            </p>

                                            <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                                                {item.title}
                                            </h3>

                                            <div className="mt-2 text-sm text-blue-100 sm:mt-3 sm:text-base">
                                                {item.content}
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                        })}

                        {/* Highlight */}

                        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:rounded-3xl sm:p-7">

                            <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 sm:text-xs">
                                Electrical Engineering
                            </p>

                            <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                                Reliable solutions for industrial requirements.
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                                From Restricted Neutral Grounding Systems
                                to testing and transformer-related services,
                                connect with us for your electrical
                                requirements.
                            </p>

                        </div>

                    </div>

                    {/* Right Form */}

                    <div className="rounded-2xl bg-white p-5 text-gray-900 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">

                        <div className="mb-6 sm:mb-8">

                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 sm:text-sm">
                                Get In Touch
                            </p>

                            <h3 className="mt-2 text-2xl font-extrabold sm:text-4xl">
                                Send Us an Enquiry
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                                Tell us about your requirement and our team
                                can get back to you with the relevant
                                information.
                            </p>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 sm:space-y-5"
                        >

                            {/* Name + Company */}

                            <div className="grid gap-4 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Company Name
                                    </label>

                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company name"
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
                                    />
                                </div>

                            </div>

                            {/* Email + Phone */}

                            <div className="grid gap-4 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91"
                                        required
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
                                    />
                                </div>

                            </div>

                            {/* Requirement */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold">
                                    Your Requirement
                                </label>

                                <textarea
                                    name="requirement"
                                    value={formData.requirement}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell us about your electrical requirement..."
                                    required
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-base"
                                />

                            </div>

                            {/* Button */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-lg"
                            >
                                <span>
                                    {loading ? "Sending..." : "Send Enquiry"}
                                </span>

                                {!loading && (
                                    <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                                )}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact