import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    subtitle: "Speak with our team",
    content: (
      <>
        <a
          href="tel:+918235634151"
          className="block hover:text-yellow-400 transition-colors duration-300 break-all"
        >
          +91 8235634151
        </a>

        <a
          href="tel:+919431331490"
          className="block mt-1 hover:text-yellow-400 transition-colors duration-300 break-all"
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
          className="block hover:text-yellow-400 transition-colors duration-300 break-all"
        >
          mee.ranchi25@gmail.com
        </a>

        <a
          href="mailto:mee.ranchi25@yahoo.com"
          className="block mt-1 hover:text-yellow-400 transition-colors duration-300 break-all"
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
      <p className="leading-7">
        Plot No. 539, Sunder Nagar, Road No. 2,
        Devidarsan Rd, Getlatu,
        Ranchi, Jharkhand - 835 217
      </p>
    ),
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white"
    >
      {/* Background Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400" />

            <p className="text-yellow-400 font-bold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Contact Us
            </p>

            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Let's Build
            <span className="text-yellow-400"> Better </span>
            Solutions
          </h2>

          <p className="mt-5 sm:mt-6 text-blue-100 text-base sm:text-lg leading-7 sm:leading-8">
            Contact Mani Electricals & Electronics for product enquiries,
            electrical testing requirements, transformer services and
            quotations.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 mt-12 sm:mt-16">

          {/* Left Side */}
          <div className="space-y-5">

            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-md p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.11] hover:border-yellow-400/30"
                >
                  <div className="flex items-start gap-4 sm:gap-5">

                    {/* Icon */}
                    <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yellow-400 text-blue-950 flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-lg sm:text-xl" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                        {item.subtitle}
                      </p>

                      <h3 className="text-xl sm:text-2xl font-bold mt-1">
                        {item.title}
                      </h3>

                      <div className="text-blue-100 text-sm sm:text-base mt-3">
                        {item.content}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

            {/* Small Highlight */}
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-7 border border-white/10">

              <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider">
                Electrical Engineering
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                Reliable solutions for industrial requirements.
              </h3>

              <p className="text-blue-100 text-sm sm:text-base leading-7 mt-3">
                From Restricted Neutral Grounding Systems to testing and
                transformer-related services, connect with us for your
                electrical requirements.
              </p>

            </div>

          </div>

          {/* Right Form */}
          <div className="rounded-2xl sm:rounded-3xl bg-white text-gray-900 p-5 sm:p-8 lg:p-10 shadow-2xl">

            <div className="mb-7 sm:mb-8">

              <p className="text-blue-600 text-sm font-bold uppercase tracking-wider">
                Get In Touch
              </p>

              <h3 className="text-3xl sm:text-4xl font-extrabold mt-2">
                Send Us an Enquiry
              </h3>

              <p className="text-gray-500 mt-3 leading-7 text-sm sm:text-base">
                Tell us about your requirement and our team can get back
                to you with the relevant information.
              </p>

            </div>

            <form className="space-y-4 sm:space-y-5">

              {/* Name + Company */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

              </div>

              {/* Requirement */}
              <div>

                <label className="block text-sm font-semibold mb-2">
                  Your Requirement
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your electrical requirement..."
                  className="w-full min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span>Send Enquiry</span>

                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;