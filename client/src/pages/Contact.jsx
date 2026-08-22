import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Get In Touch
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Contact Mani Electricals & Electronics for product enquiries,
            electrical testing requirements and quotations.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-6">

            {/* Phone */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">

              <FaPhoneAlt className="text-2xl text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                Phone
              </h3>

              <a
                href="tel:+918235634151"
                className="block text-gray-600 mt-3 hover:text-blue-600"
              >
                +91 8235634151
              </a>

              <a
                href="tel:+919431331490"
                className="block text-gray-600 mt-1 hover:text-blue-600"
              >
                +91 9431331490
              </a>

            </div>

            {/* Email */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">

              <FaEnvelope className="text-2xl text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                Email
              </h3>

              <a
                href="mailto:mee.ranchi25@gmail.com"
                className="block text-gray-600 mt-3 hover:text-blue-600"
              >
                mee.ranchi25@gmail.com
              </a>

              <a
                href="mailto:mee.ranchi25@yahoo.com"
                className="block text-gray-600 mt-1 hover:text-blue-600"
              >
                mee.ranchi25@yahoo.com
              </a>

            </div>

            {/* Address */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">

              <FaMapMarkerAlt className="text-2xl text-blue-600 mb-5" />

              <h3 className="text-xl font-bold">
                Address
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Plot No. 539, Sunder Nagar, Road No. 2,
                Devidarsan Rd, Getlatu,
                Ranchi, Jharkhand - 835 217
              </p>

            </div>

          </div>

          {/* Enquiry Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-gray-900 mb-7">
              Send Us an Enquiry
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Requirement"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;