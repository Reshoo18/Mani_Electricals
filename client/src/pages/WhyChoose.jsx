const features = [
  {
    title: "10+ Years Experience",
    description: "Trusted expertise in industrial electrical solutions.",
  },
  {
    title: "Quality Assurance",
    description: "Every product is tested before delivery.",
  },
  {
    title: "On-Time Delivery",
    description: "Projects completed within committed timelines.",
  },
  {
    title: "Custom Solutions",
    description: "Products designed as per client requirements.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Industries Trust Us
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We are committed to delivering reliable industrial electrical
            solutions with quality, safety and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
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