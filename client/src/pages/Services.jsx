import React from 'react'

const services = [
  {
    title: "Design",
    description:
      "Custom Neutral Grounding Resistor solutions for industrial requirements.",
  },
  {
    title: "Manufacturing",
    description:
      "High-quality manufacturing with reliable industrial standards.",
  },
  {
    title: "Supply",
    description:
      "Fast and reliable supply of Neutral Grounding Resistors across India.",
  },
  {
    title: "Installation",
    description:
      "Professional installation by experienced engineers.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "Complete testing and commissioning before project handover.",
  },
  {
    title: "Transformer Repair",
    description:
      "Repair and maintenance services for industrial transformers.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Complete Industrial Electrical Solutions
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We provide complete engineering solutions from design to
            commissioning with quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
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