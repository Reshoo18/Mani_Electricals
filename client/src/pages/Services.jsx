import React from "react";

const services = [
  {
    title: "High Voltage Test",
    description:
      "High voltage testing services for electrical equipment and systems.",
  },
  {
    title: "Current Injection Test",
    description:
      "Current injection testing as part of electrical testing activities.",
  },
  {
    title: "Relay Test",
    description:
      "Relay testing for electrical protection systems.",
  },
  {
    title: "Circuit Breaker & Transformer Testing",
    description:
      "Testing of circuit breakers and transformers.",
  },
  {
    title: "Transformer Filtration",
    description:
      "\"ON LINE\" filtration of transformer by vehicle mounted high vacuum filtration plant.",
  },
  {
    title: "Transformer Overhauling & Acidity Test",
    description:
      "Periodical overhauling of transformer along with acidity testing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Testing & Transformer
            <span className="text-blue-600">
              {" "}Services
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Mani Electricals & Electronics undertakes electrical testing,
            transformer testing and transformer maintenance related activities.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;