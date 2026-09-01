import React from "react";
import { Link } from "react-router-dom";

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
    <section
      id="products"
      className="relative overflow-hidden bg-[#030817] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-yellow-400" />

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                Our Products
              </p>
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Electrical Products
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Built for Industrial Applications
              </span>
            </h1>
          </div>

          <div>
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              Explore our range of electrical products, grounding systems,
              protection equipment and transformer-related solutions designed
              to support reliable industrial power-system requirements.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-6 py-3.5 font-bold text-[#06112f] shadow-lg shadow-yellow-400/20 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto"
            >
              Request a Quote →
            </Link>
          </div>
        </div>

        {/* Product Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2">

          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-white shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/30"
            >

              {/* Image Section */}
              <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-5 sm:h-64">

                {/* Number */}
                <div
                  className={`absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl font-black shadow-lg ${
                    index === 0
                      ? "bg-yellow-400 text-[#06112f]"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image Glow */}
                <div className="absolute h-40 w-40 rounded-full bg-blue-400/20 blur-3xl transition duration-500 group-hover:scale-150" />

                <img
                  src={product.image}
                  alt={product.title}
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute bottom-4 right-4 rounded-full bg-[#07143d] px-4 py-2 text-xs font-bold text-white shadow-lg">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                <p className="text-xs font-black uppercase tracking-[0.15em] text-blue-600">
                  {product.category}
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight text-[#071126]">
                  {product.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {product.description}
                </p>

                <div className="my-6 h-px bg-slate-200" />

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 sm:w-auto"
                  >
                    Enquire Now
                    <span>→</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#07143d] px-5 py-3 font-bold text-[#07143d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#07143d] hover:text-white sm:w-auto"
                  >
                    Request a Quote
                  </Link>

                </div>

                {/* Product Number */}
                <div className="mt-5 flex justify-end">
                  <span className="text-4xl font-black text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 p-7 shadow-2xl shadow-blue-950/40 sm:p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
                Need a Customized Solution?
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Let's discuss your electrical requirements.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
                Contact Mani Electricals & Electronics for product enquiries,
                grounding requirements, testing services and industrial
                electrical solutions.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-yellow-400 px-7 py-3.5 font-black text-[#06112f] transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:w-auto"
            >
              Contact Us →
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;