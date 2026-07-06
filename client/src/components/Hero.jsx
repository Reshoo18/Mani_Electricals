import React from 'react'


const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-16">

        {/* Left Content */}
        <div className="w-1/2">

          <h1 className="text-6xl font-extrabold leading-tight">
            Design, Manufacture &
            <br />
            Supply of
            <span className="text-blue-600">
              <br />
              Neutral Grounding
              <br />
              Resistors
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Mani Electricals & Electronics specializes in the Design,
            Manufacturing, Supply, Installation, Testing and Commissioning
            of Neutral Grounding Resistors (NGR), along with Transformer
            Repair & Maintenance Services across India.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg transition duration-300">
              Request a Quote
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-3 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>

        </div>

        {/* Right Content */}
        <div className="w-1/2 flex justify-center">

          <div className="w-full max-w-md h-[450px] bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-gray-600 font-semibold">
            NGR Product Image
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;