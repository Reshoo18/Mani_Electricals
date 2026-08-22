import React from "react";
import ngrImage from "../assets/ngr-433v-open.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="bg-blue-50 rounded-3xl p-8">

          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-[420px]">

            <img
              src={ngrImage}
              alt="Mani Electricals Restricted Neutral Grounding System"
              className="max-h-[380px] w-full object-contain"
            />

          </div>

        </div>

        {/* Content */}
        <div>

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Electrical Solutions Built Around
            <span className="text-blue-600">
              {" "}Safety & Reliability
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Mani Electricals & Electronics is engaged in electrical and
            power-system solutions, with a focus on Restricted Neutral
            Grounding Systems and related electrical equipment.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            The company also undertakes testing and maintenance related
            activities for transformers and electrical systems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900">
                Restricted Grounding
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Neutral Grounding System solutions
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900">
                Electrical Testing
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Testing for electrical systems and transformers
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;