import React from 'react'

const About = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-16">

        <div className="w-1/2 flex justify-center">
          <div className="w-full max-w-md h-[450px] bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
            Company Image
          </div>
        </div>

        <div className="w-1/2">

          <p className="text-blue-600 font-semibold uppercase">
            About Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Trusted Industrial Electrical Solution Provider
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Mani Electricals & Electronics is a trusted manufacturer of
            Neutral Grounding Resistors (NGR). We provide complete
            industrial electrical solutions including design,
            manufacturing, supply, installation, testing and
            commissioning along with transformer repair and maintenance
            services.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div>✔ Industrial Expertise</div>

            <div>✔ Quality Manufacturing</div>

            <div>✔ Installation</div>

            <div>✔ Testing & Commissioning</div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
