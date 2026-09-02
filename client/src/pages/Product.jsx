import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../utils/axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productApi();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#030817] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <div
              key={product._id}
              className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-[20px] border border-white/10 bg-white shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2"
            >

              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-3">

                <div
                  className={`absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black shadow-lg ${
                    index === 0
                      ? "bg-yellow-400 text-[#06112f]"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute h-28 w-28 rounded-full bg-blue-400/20 blur-3xl transition duration-500 group-hover:scale-150" />

                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 max-h-full max-w-[78%] object-contain drop-shadow-xl transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-3 right-3 rounded-full bg-[#07143d] px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                  {product.category}
                </div>

              </div>

              <div className="p-4">

                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600">
                  {product.category}
                </p>

                <h2 className="mt-1.5 text-lg font-black leading-tight text-[#071126]">
                  {product.name}
                </h2>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {product.description}
                </p>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {product.details}
                </p>

                <div className="my-3 h-px bg-slate-200" />

                <div className="flex items-center justify-between gap-3">

                  <Link
                    to={`/products/${product._id}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white transition duration-300 hover:bg-blue-700"
                  >
                    View Details
                    <span>→</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-[#07143d] px-4 py-2 text-xs font-bold text-[#07143d] transition duration-300 hover:bg-[#07143d] hover:text-white"
                  >
                    Request a Quote
                  </Link>

                </div>

                <div className="mt-2 flex justify-end">
                  <span className="text-2xl font-black text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

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