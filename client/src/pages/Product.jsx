const products = [
  {
    name: "Neutral Grounding Resistor (NGR)",
    description:
      "High-performance Neutral Grounding Resistors designed for industrial power systems with reliable protection and durability.",
  },
];

const Product = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase">
            Our Products
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Industrial Products
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We manufacture high-quality electrical products designed to
            meet industrial safety and performance standards.
          </p>
        </div>

        <div className="mt-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8"
            >

              {/* Image */}
              <div className="h-[350px] bg-gray-200 rounded-xl flex justify-center items-center">
                Product Image
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-6 text-gray-600 leading-8">
                  {product.description}
                </p>

                <ul className="mt-8 space-y-3">
                  <li>✔ High Quality Material</li>
                  <li>✔ Custom Design Available</li>
                  <li>✔ Industrial Grade Performance</li>
                  <li>✔ Reliable & Durable</li>
                </ul>

                <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Product;