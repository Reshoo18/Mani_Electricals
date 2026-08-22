import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import ngrImage from "../assets/ngr-433v.png";

const Home = () => {
  return (
    <div className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <Hero />


      {/* ================= COMPANY INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Visual */}
            <div className="relative">

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-3xl"></div>

              <div className="relative bg-blue-50 rounded-3xl p-8">

                <div className="bg-white rounded-2xl p-5 shadow-xl">
                  <img
                    src={ngrImage}
                    alt="Restricted Neutral Grounding System"
                    className="w-full h-[420px] object-contain rounded-xl"
                  />
                </div>

              </div>

              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white rounded-2xl px-7 py-5 shadow-xl">
                <p className="text-3xl font-bold">MEE</p>
                <p className="text-blue-100 text-sm">
                  Electrical & Power Solutions
                </p>
              </div>

            </div>


            {/* Right Content */}
            <div>

              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                About Mani Electricals
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                Engineering Solutions Built Around
                <span className="text-blue-600"> Safety & Reliability</span>
              </h2>

              <p className="text-slate-600 leading-8 mt-7 text-lg">
                Mani Electricals & Electronics provides electrical and
                power-system solutions with a focus on Restricted Neutral
                Grounding Systems and related electrical equipment.
              </p>

              <p className="text-slate-600 leading-8 mt-5">
                The company also undertakes electrical testing, transformer
                testing and maintenance related activities for industrial
                electrical systems.
              </p>


              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-500 transition">
                  <h3 className="font-bold text-lg">
                    Restricted Grounding
                  </h3>

                  <p className="text-slate-500 mt-2 text-sm">
                    Neutral grounding system solutions for industrial
                    power requirements.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-500 transition">
                  <h3 className="font-bold text-lg">
                    Electrical Testing
                  </h3>

                  <p className="text-slate-500 mt-2 text-sm">
                    Testing services for electrical systems and transformers.
                  </p>
                </div>

              </div>

              <Link
                to="/about"
                className="inline-flex mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold transition"
              >
                Learn More About Us →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CORE SOLUTIONS ================= */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Core Solutions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Electrical Solutions For
              <span className="text-blue-600"> Industrial Requirements</span>
            </h2>

            <p className="text-slate-600 mt-6 leading-7">
              From grounding systems and electrical equipment to testing
              and transformer-related services, Mani Electricals & Electronics
              provides solutions for industrial power-system requirements.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-7 mt-16">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-slate-100">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 text-2xl font-bold">
                  01
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-7">
                NGR Systems
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Restricted Neutral Grounding Systems designed for electrical
                power supply systems including 433V, 550V, 3.3KV, 6.6KV
                and 11KV applications.
              </p>

              <Link
                to="/products"
                className="inline-block mt-6 text-blue-600 font-bold"
              >
                Explore NGR →
              </Link>

            </div>


            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-slate-100">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 text-2xl font-bold">
                  02
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Electrical Testing
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Electrical testing services including high voltage testing,
                current injection testing, relay testing and circuit breaker
                and transformer testing.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-blue-600 font-bold"
              >
                View Services →
              </Link>

            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition border border-slate-100">

              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 text-2xl font-bold">
                  03
                </span>
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Transformer Services
              </h3>

              <p className="text-slate-600 leading-7 mt-4">
                Transformer-related maintenance activities including
                filtration, testing, overhauling and acidity testing.
              </p>

              <Link
                to="/services"
                className="inline-block mt-6 text-blue-600 font-bold"
              >
                Explore Services →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED NGR ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 rounded-[2rem] overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="p-8 lg:p-12 flex items-center">

                <div className="bg-white rounded-2xl p-6 w-full">

                  <img
                    src={ngrImage}
                    alt="Restricted Neutral Grounding System"
                    className="w-full h-[450px] object-contain"
                  />

                </div>

              </div>


              {/* Content */}
              <div className="text-white p-8 lg:p-16 flex flex-col justify-center">

                <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
                  Featured Electrical Solution
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                  Restricted Neutral
                  <br />
                  Grounding System
                </h2>

                <p className="text-blue-100 leading-8 mt-6 text-lg">
                  A dedicated grounding solution for industrial electrical
                  power systems, designed around controlled neutral grounding
                  requirements.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">

                  <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                    <p className="text-yellow-400 font-bold">
                      Voltage Range
                    </p>
                    <p className="text-white mt-2 text-sm">
                      433V / 550V
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                    <p className="text-yellow-400 font-bold">
                      Medium Voltage
                    </p>
                    <p className="text-white mt-2 text-sm">
                      3.3KV / 6.6KV / 11KV
                    </p>
                  </div>

                </div>

                <Link
                  to="/products"
                  className="mt-8 inline-flex w-fit bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-7 py-3.5 rounded-lg font-bold transition"
                >
                  View Product Details →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>

              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                Our Products
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Electrical Products &
                <span className="text-blue-600"> Grounding Solutions</span>
              </h2>

            </div>

            <Link
              to="/products"
              className="text-blue-600 font-bold"
            >
              View All Products →
            </Link>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              {
                title: "Restricted Neutral Grounding System",
                text: "Grounding systems for 433V, 550V, 3.3KV, 6.6KV and 11KV power supply systems."
              },
              {
                title: "Resin Cast Current Transformer",
                text: "Current transformer solutions for electrical measurement and protection applications."
              },
              {
                title: "Solid State Earth Leakage Relay",
                text: "Earth leakage relay solutions for electrical protection and monitoring applications."
              },
              {
                title: "Transformer & Breaker Spares",
                text: "Spare parts and related electrical components for transformers and circuit breakers."
              }
            ].map((product, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl transition"
              >

                <div className="text-blue-600 font-bold text-sm">
                  PRODUCT 0{index + 1}
                </div>

                <h3 className="text-xl font-bold mt-5 leading-snug">
                  {product.title}
                </h3>

                <p className="text-slate-600 leading-7 mt-4 text-sm">
                  {product.text}
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-6 text-blue-600 font-bold"
                >
                  Enquire Now →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Our Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Testing & Transformer
              <span className="text-blue-600"> Services</span>
            </h2>

            <p className="text-slate-600 mt-5 leading-7">
              Electrical testing and transformer-related services for
              industrial electrical systems.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

            {[
              "High Voltage Test",
              "Current Injection Test",
              "Relay Test",
              "Circuit Breaker & Transformer Testing",
              "Transformer Filtration",
              "Transformer Overhauling & Acidity Test"
            ].map((service, index) => (

              <div
                key={index}
                className="group border border-slate-200 rounded-2xl p-7 hover:bg-blue-700 hover:text-white transition"
              >

                <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 group-hover:text-white font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {service}
                </h3>

                <p className="text-slate-500 group-hover:text-blue-100 mt-3 leading-7">
                  Professional electrical service support related to
                  industrial power-system requirements.
                </p>

              </div>

            ))}

          </div>


          <div className="text-center mt-10">

            <Link
              to="/services"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold"
            >
              Explore All Services →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-blue-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Why Industries
              <span className="text-blue-600"> Trust Us</span>
            </h2>

            <p className="text-slate-600 mt-5 leading-7">
              We focus on dependable electrical solutions, quality,
              safety and customer requirements.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              {
                title: "Quality Assurance",
                text: "Solutions developed with attention to quality and reliable performance."
              },
              {
                title: "Technical Expertise",
                text: "Focused experience in grounding systems, electrical testing and transformer services."
              },
              {
                title: "Reliable Solutions",
                text: "Electrical solutions designed around industrial power-system requirements."
              },
              {
                title: "Customer Focus",
                text: "Solutions and services aligned with individual project requirements."
              }
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition text-center"
              >

                <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xl font-bold">
                    ✓
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-3 leading-7 text-sm">
                  {item.text}
                </p>

              </div>

            ))}

          </div>


          <div className="text-center mt-10">

            <Link
              to="/why-choose-us"
              className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold"
            >
              Why Choose Mani Electricals →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUALITY ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                Quality & Safety
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Built Around
                <span className="text-blue-600"> Quality & Safety</span>
              </h2>

              <p className="text-slate-600 leading-8 mt-6">
                Mani Electricals & Electronics focuses on dependable
                electrical and power-system solutions with attention to
                quality, safety and reliable service.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Quality Management
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      Focus on consistent quality across electrical
                      solutions and services.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Occupational Safety
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      Safety-conscious approach to electrical and
                      industrial activities.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            <div className="bg-blue-950 rounded-3xl p-10 text-white">

              <p className="text-blue-300 font-semibold">
                OUR COMMITMENT
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mt-4">
                Reliable Electrical Solutions For Industry
              </h3>

              <p className="text-blue-100 leading-7 mt-5">
                From grounding systems to electrical testing and
                transformer-related activities, our solutions are
                focused on practical industrial requirements.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="border border-blue-700 rounded-xl p-5">
                  <p className="text-yellow-400 text-2xl font-bold">
                    433V+
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Electrical Systems
                  </p>
                </div>

                <div className="border border-blue-700 rounded-xl p-5">
                  <p className="text-yellow-400 text-2xl font-bold">
                    11KV
                  </p>
                  <p className="text-blue-200 text-sm mt-1">
                    Higher Voltage Applications
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-blue-700">

        <div className="max-w-5xl mx-auto px-6 text-center text-white">

          <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
            Let's Work Together
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Looking For A Reliable
            <br />
            Electrical Solution?
          </h2>

          <p className="text-blue-100 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Contact Mani Electricals & Electronics for product enquiries,
            electrical testing requirements and quotations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-9">

            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-lg font-bold transition"
            >
              Request a Quote
            </Link>

            <Link
              to="/products"
              className="border border-white/60 hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-bold transition"
            >
              Explore Products
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTACT PREVIEW ================= */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-slate-200 rounded-2xl p-7">
              <p className="text-blue-600 font-bold">
                PHONE
              </p>

              <h3 className="text-xl font-bold mt-3">
                +91 8235634151
              </h3>

              <p className="text-slate-500 mt-1">
                +91 9431331490
              </p>
            </div>


            <div className="border border-slate-200 rounded-2xl p-7">
              <p className="text-blue-600 font-bold">
                EMAIL
              </p>

              <h3 className="text-lg font-bold mt-3 break-all">
                mee.ranchi25@gmail.com
              </h3>
            </div>


            <div className="border border-slate-200 rounded-2xl p-7">
              <p className="text-blue-600 font-bold">
                LOCATION
              </p>

              <h3 className="text-xl font-bold mt-3">
                Ranchi, Jharkhand
              </h3>

              <p className="text-slate-500 mt-1">
                India
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-3 gap-12">

            <div>

              <h2 className="text-2xl font-bold">
                MANI ELECTRICALS
              </h2>

              <p className="text-blue-300 mt-1">
                & ELECTRONICS
              </p>

              <p className="text-blue-200 leading-7 mt-5 max-w-md">
                Electrical and power-system solutions with a focus on
                Restricted Neutral Grounding Systems and related
                electrical services.
              </p>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 mt-5">

                <Link to="/" className="text-blue-200 hover:text-white">
                  Home
                </Link>

                <Link to="/about" className="text-blue-200 hover:text-white">
                  About Us
                </Link>

                <Link to="/products" className="text-blue-200 hover:text-white">
                  Products
                </Link>

                <Link to="/services" className="text-blue-200 hover:text-white">
                  Services
                </Link>

                <Link to="/why-choose-us" className="text-blue-200 hover:text-white">
                  Why Choose Us
                </Link>

                <Link to="/contact" className="text-blue-200 hover:text-white">
                  Contact
                </Link>

              </div>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Contact
              </h3>

              <p className="text-blue-200 mt-5">
                Ranchi, Jharkhand - India
              </p>

              <p className="text-blue-200 mt-2">
                +91 8235634151
              </p>

              <p className="text-blue-200 mt-1">
                +91 9431331490
              </p>

              <p className="text-blue-200 mt-2 break-all">
                mee.ranchi25@gmail.com
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-blue-800">

          <div className="max-w-7xl mx-auto px-6 py-5 text-center">

            <p className="text-blue-300 text-sm">
              © 2026 Mani Electricals & Electronics. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;