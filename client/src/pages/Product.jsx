import React from "react";

import ngrImage from "../assets/ngr-433v.png";
import ngrInternal from "../assets/ngr-433v-internal.png";
import ngr11kv from "../assets/ngr-11kv.png";
import ngrComponents from "../assets/ngr-components.png";

const products = [
  {
    title: "Restricted Neutral Grounding System",
    category: "Featured Solution",
    description:
      "Restricted Neutral Grounding System for 433V / 550V and 3.3KV / 6.6KV / 11KV power supply systems.",
    image: ngrImage,
  },
  {
    title: "Resin Cast Current Transformer",
    category: "Electrical Equipment",
    description:
      "Resin cast current transformer equipment included in the company's electrical solution range.",
    image: ngrComponents,
  },
  {
    title: "Solid State Earth Leakage Relay",
    category: "Protection",
    description:
      "Solid state earth leakage relay solution for electrical protection and monitoring applications.",
    image: ngrInternal,
  },
  {
    title: "Transformer & Circuit Breaker Spares",
    category: "Spare Parts",
    description:
      "Spare parts for circuit breakers and transformers.",
    image: ngr11kv,
  },
];

const Product = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-blue-600 font-bold uppercase tracking-wider">
            Our Products
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Electrical Products &
            <span className="text-blue-600">
              {" "}Grounding Solutions
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Explore our range of electrical products and systems for
            industrial power-system requirements.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="h-56 bg-blue-50 flex items-center justify-center p-5">

                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-blue-600 text-sm font-semibold">
                  {product.category}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-3">
                  {product.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4 text-sm">
                  {product.description}
                </p>

                <a
                  href="#contact"
                  className="inline-block mt-6 text-blue-600 font-bold hover:text-blue-800"
                >
                  Enquire Now →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Product;