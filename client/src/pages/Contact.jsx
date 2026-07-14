const Contact = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Get In Touch
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Looking for Neutral Grounding Resistors or industrial electrical
            solutions? Send us your enquiry and our team will get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">
                info@manielectricals.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Lucknow, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
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