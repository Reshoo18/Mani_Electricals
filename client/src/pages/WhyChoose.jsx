import React from "react";

const features = [
  {
    title: "ISO 9001:2015",
    description:
      "The company documentation identifies ISO 9001:2015 certification.",
  },
  {
    title: "ISO 45001:2018",
    description:
      "The company documentation identifies ISO 45001:2018 certification.",
  },
  {
    title: "Electrical Solutions",
    description:
      "Solutions focused on Restricted Neutral Grounding Systems and related electrical equipment.",
  },
  {
    title: "Testing & Maintenance",
    description:
      "Electrical testing and transformer-related maintenance activities are undertaken.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            Why Mani Electricals
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Electrical Solutions with
            <span className="text-blue-600">
              {" "}Safety in Focus
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Our company documentation highlights electrical solutions,
            grounding systems, testing activities and ISO certifications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 hover:shadow-xl transition duration-300"
            >

              <div className="text-blue-600 font-bold text-3xl">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;