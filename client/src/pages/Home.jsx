import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import ngrImage from "../assets/ngr-433v.png";

const Home = () => {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      <style>{`
        @keyframes meeFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        @keyframes meePulse {
          0%, 100% {
            opacity: .35;
            transform: scale(1);
          }
          50% {
            opacity: .8;
            transform: scale(1.08);
          }
        }

        @keyframes meeShine {
          0% {
            transform: translateX(-130%);
          }
          50%, 100% {
            transform: translateX(130%);
          }
        }

        @keyframes meeGradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .mee-float {
          animation: meeFloat 5s ease-in-out infinite;
        }

        .mee-pulse {
          animation: meePulse 4s ease-in-out infinite;
        }

        .mee-card {
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease,
            background-color .4s ease;
        }

        .mee-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 25px 70px rgba(37, 99, 235, .22);
        }

        .mee-shine {
          position: relative;
          overflow: hidden;
        }

        .mee-shine::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -40%;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.14),
            transparent
          );
          transform: translateX(-130%);
          animation: meeShine 7s ease-in-out infinite;
          pointer-events: none;
        }

        .mee-glow {
          position: relative;
          isolation: isolate;
        }

        .mee-glow::before {
          content: "";
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(
              circle at 20% 30%,
              rgba(37,99,235,.22),
              transparent 35%
            ),
            radial-gradient(
              circle at 80% 70%,
              rgba(79,70,229,.18),
              transparent 35%
            );
          z-index: -1;
          pointer-events: none;
          animation: meePulse 6s ease-in-out infinite;
        }

        .mee-gradient {
          background-size: 200% 200%;
          animation: meeGradient 10s ease infinite;
        }
      `}</style>

      {/* ================= HERO ================= */}
      <Hero />


      {/* ================= COMPANY INTRO ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white mee-glow">

        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

            {/* Left Visual */}
            <div className="relative mee-float">

              <div className="absolute -top-5 -left-5 w-28 sm:w-32 h-28 sm:h-32 bg-blue-500/10 border border-blue-400/10 rounded-3xl blur-[1px]" />

              <div className="relative bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-slate-900/80 border border-blue-400/20 rounded-3xl p-5 sm:p-8 shadow-2xl">

                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl mee-shine">

                  <img
                    src={ngrImage}
                    alt="Restricted Neutral Grounding System"
                    className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-contain rounded-xl"
                  />

                </div>

              </div>

              <div className="absolute -bottom-5 right-2 sm:-right-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl px-5 sm:px-7 py-4 sm:py-5 shadow-2xl border border-blue-400/30">

                <p className="text-2xl sm:text-3xl font-bold">
                  MEE
                </p>

                <p className="text-blue-100 text-xs sm:text-sm">
                  Electrical & Power Solutions
                </p>

              </div>

            </div>


            {/* Right Content */}
            <div>

              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                About Mani Electricals
              </p>

              <div className="mt-3 h-1 w-14 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mt-5">

                Engineering Solutions Built Around

                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent">
                  Safety & Reliability
                </span>

              </h2>

              <p className="text-slate-300 leading-8 mt-7 text-lg">
                Mani Electricals & Electronics provides electrical and
                power-system solutions with a focus on Restricted Neutral
                Grounding Systems and related electrical equipment.
              </p>

              <p className="text-slate-400 leading-8 mt-5">
                The company also undertakes electrical testing, transformer
                testing and maintenance related activities for industrial
                electrical systems.
              </p>


              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <div className="mee-card border border-blue-400/20 bg-white/[0.05] backdrop-blur-md rounded-2xl p-5 hover:border-blue-400/50 hover:bg-blue-500/[0.08]">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-4">
                    <span className="text-blue-400 font-bold">
                      01
                    </span>
                  </div>

                  <h3 className="font-bold text-lg">
                    Restricted Grounding
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm leading-6">
                    Neutral grounding system solutions for industrial
                    power requirements.
                  </p>

                </div>


                <div className="mee-card border border-indigo-400/20 bg-white/[0.05] backdrop-blur-md rounded-2xl p-5 hover:border-indigo-400/50 hover:bg-indigo-500/[0.08]">

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center mb-4">
                    <span className="text-indigo-400 font-bold">
                      02
                    </span>
                  </div>

                  <h3 className="font-bold text-lg">
                    Electrical Testing
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm leading-6">
                    Testing services for electrical systems and transformers.
                  </p>

                </div>

              </div>


              <Link
                to="/about"
                className="group inline-flex items-center justify-center mt-8 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Us
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CORE SOLUTIONS ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white">

        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
              Our Core Solutions
            </p>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400" />

            <h2 className="text-4xl sm:text-5xl font-bold mt-5">
              Electrical Solutions For

              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industrial Requirements
              </span>
            </h2>

            <p className="text-slate-400 mt-6 leading-7">
              From grounding systems and electrical equipment to testing
              and transformer-related services, Mani Electricals & Electronics
              provides solutions for industrial power-system requirements.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6 sm:gap-7 mt-14">

            {/* Card 1 */}
            <div className="mee-card group bg-white/[0.05] backdrop-blur-md rounded-3xl p-7 sm:p-8 shadow-xl border border-blue-400/15 hover:border-blue-400/50 hover:bg-blue-500/[0.08]">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-900/40">

                <span className="text-white text-xl font-bold">
                  01
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-7">
                NGR Systems
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Restricted Neutral Grounding Systems designed for electrical
                power supply systems including 433V, 550V, 3.3KV, 6.6KV
                and 11KV applications.
              </p>

              <Link
                to="/products"
                className="inline-flex items-center mt-6 text-blue-400 font-bold group-hover:text-yellow-400 transition"
              >
                Explore NGR
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

            </div>


            {/* Card 2 */}
            <div className="mee-card group bg-white/[0.05] backdrop-blur-md rounded-3xl p-7 sm:p-8 shadow-xl border border-indigo-400/15 hover:border-indigo-400/50 hover:bg-indigo-500/[0.08]">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-900/40">

                <span className="text-white text-xl font-bold">
                  02
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-7">
                Electrical Testing
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Electrical testing services including high voltage testing,
                current injection testing, relay testing and circuit breaker
                and transformer testing.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center mt-6 text-blue-400 font-bold group-hover:text-yellow-400 transition"
              >
                View Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

            </div>


            {/* Card 3 */}
            <div className="mee-card group bg-white/[0.05] backdrop-blur-md rounded-3xl p-7 sm:p-8 shadow-xl border border-cyan-400/15 hover:border-cyan-400/50 hover:bg-cyan-500/[0.06]">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-900/40">

                <span className="text-white text-xl font-bold">
                  03
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-7">
                Transformer Services
              </h3>

              <p className="text-slate-400 leading-7 mt-4">
                Transformer-related maintenance activities including
                filtration, testing, overhauling and acidity testing.
              </p>

              <Link
                to="/services"
                className="inline-flex items-center mt-6 text-blue-400 font-bold group-hover:text-yellow-400 transition"
              >
                Explore Services
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURED NGR ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950">

        <div className="absolute -top-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-700 rounded-[2rem] overflow-hidden border border-blue-400/20 shadow-2xl shadow-blue-950/50 mee-shine">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />

            <div className="relative grid lg:grid-cols-2">

              {/* Image */}
              <div className="p-5 sm:p-8 lg:p-12 flex items-center">

                <div className="bg-white rounded-2xl p-4 sm:p-6 w-full shadow-2xl">

                  <img
                    src={ngrImage}
                    alt="Restricted Neutral Grounding System"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain"
                  />

                </div>

              </div>


              {/* Content */}
              <div className="text-white p-7 sm:p-10 lg:p-16 flex flex-col justify-center">

                <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
                  Featured Electrical Solution
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
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

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">

                    <p className="text-yellow-400 font-bold">
                      Voltage Range
                    </p>

                    <p className="text-white mt-2 text-sm">
                      433V / 550V
                    </p>

                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">

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
                  className="mt-8 inline-flex w-full sm:w-fit justify-center bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-yellow-500/20"
                >
                  View Product Details →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white">

        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>

              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                Our Products
              </p>

              <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />

              <h2 className="text-4xl sm:text-5xl font-bold mt-4">
                Electrical Products &

                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Grounding Solutions
                </span>
              </h2>

            </div>

            <Link
              to="/products"
              className="text-blue-400 font-bold hover:text-yellow-400 transition"
            >
              View All Products →
            </Link>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 sm:mt-14">

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
                className="mee-card group bg-white/[0.05] backdrop-blur-md rounded-2xl border border-blue-400/15 p-6 sm:p-7 hover:border-blue-400/50 hover:bg-blue-500/[0.08]"
              >

                <div className="text-blue-400 font-bold text-sm">
                  PRODUCT 0{index + 1}
                </div>

                <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-16 transition-all duration-300" />

                <h3 className="text-xl font-bold mt-5 leading-snug">
                  {product.title}
                </h3>

                <p className="text-slate-400 leading-7 mt-4 text-sm">
                  {product.text}
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center mt-6 text-blue-400 font-bold group-hover:text-yellow-400 transition"
                >
                  Enquire Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
              Our Services
            </p>

            <div className="mx-auto mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />

            <h2 className="text-4xl sm:text-5xl font-bold mt-5">
              Testing & Transformer

              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-yellow-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              Electrical testing and transformer-related services for
              industrial electrical systems.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-14">

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
                className="mee-card group border border-blue-400/15 bg-white/[0.04] backdrop-blur-md rounded-2xl p-6 sm:p-7 hover:bg-blue-600/10 hover:border-blue-400/50"
              >

                <div className="flex items-center justify-between">

                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-600 group-hover:border-blue-500 rounded-xl flex items-center justify-center transition-all duration-300">

                    <span className="text-blue-400 group-hover:text-white font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <span className="text-xs uppercase tracking-wider text-slate-600 group-hover:text-blue-300 transition">
                    Service
                  </span>

                </div>

                <h3 className="text-xl font-bold mt-6">
                  {service}
                </h3>

                <p className="text-slate-400 group-hover:text-blue-100 mt-3 leading-7">
                  Professional electrical service support related to
                  industrial power-system requirements.
                </p>

                <div className="mt-5 h-[1px] bg-white/10" />

                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-blue-400 font-semibold group-hover:text-yellow-400 transition"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>

              </div>

            ))}

          </div>


          <div className="text-center mt-10">

            <Link
              to="/services"
              className="inline-flex w-full sm:w-auto justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1"
            >
              Explore All Services →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.12),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
              Why Choose Us
            </p>

            <div className="mx-auto mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />

            <h2 className="text-4xl sm:text-5xl font-bold mt-5">
              Why Industries

              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>

            <p className="text-slate-400 mt-5 leading-7">
              We focus on dependable electrical solutions, quality,
              safety and customer requirements.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12 sm:mt-14">

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
                className="mee-card group bg-white/[0.05] backdrop-blur-md border border-blue-400/15 rounded-2xl p-7 sm:p-8 hover:border-blue-400/50 hover:bg-blue-500/[0.08] text-center"
              >

                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/20 flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">

                  <span className="text-blue-400 group-hover:text-white text-xl font-bold">
                    ✓
                  </span>

                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-7 text-sm">
                  {item.text}
                </p>

              </div>

            ))}

          </div>


          <div className="text-center mt-10">

            <Link
              to="/why-choose-us"
              className="inline-flex w-full sm:w-auto justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1"
            >
              Why Choose Mani Electricals →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUALITY ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">

        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

            <div>

              <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                Quality & Safety
              </p>

              <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />

              <h2 className="text-4xl sm:text-5xl font-bold mt-5 leading-tight">

                Built Around

                <span className="block bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                  Quality & Safety
                </span>

              </h2>

              <p className="text-slate-300 leading-8 mt-6">
                Mani Electricals & Electronics focuses on dependable
                electrical and power-system solutions with attention to
                quality, safety and reliable service.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">

                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Quality Management
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Focus on consistent quality across electrical
                      solutions and services.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 font-bold">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Occupational Safety
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Safety-conscious approach to electrical and
                      industrial activities.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <div className="bg-gradient-to-br from-blue-900/70 via-indigo-900/70 to-slate-900/80 border border-blue-400/20 rounded-3xl p-7 sm:p-10 text-white mee-shine mee-card shadow-2xl">

              <p className="text-blue-300 font-semibold">
                OUR COMMITMENT
              </p>

              <h3 className="text-3xl sm:text-4xl font-bold mt-4">
                Reliable Electrical Solutions For Industry
              </h3>

              <p className="text-blue-100 leading-7 mt-5">
                From grounding systems to electrical testing and
                transformer-related activities, our solutions are
                focused on practical industrial requirements.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="border border-blue-400/20 bg-blue-500/10 rounded-xl p-5">

                  <p className="text-yellow-400 text-2xl font-bold">
                    433V+
                  </p>

                  <p className="text-blue-200 text-sm mt-1">
                    Electrical Systems
                  </p>

                </div>

                <div className="border border-blue-400/20 bg-blue-500/10 rounded-xl p-5">

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
      <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-700 text-white">

        <div className="absolute -top-40 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-6 text-center">

          <p className="text-yellow-400 font-bold tracking-widest uppercase text-sm">
            Let's Work Together
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
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
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-yellow-500/20"
            >
              Request a Quote
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto border border-white/40 bg-white/5 hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1"
            >
              Explore Products
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CONTACT PREVIEW ================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">

        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">

            <div className="mee-card border border-blue-400/15 bg-white/[0.04] backdrop-blur-md rounded-2xl p-7 hover:border-blue-400/40">

              <p className="text-blue-400 font-bold">
                PHONE
              </p>

              <h3 className="text-xl font-bold mt-3">
                +91 8235634151
              </h3>

              <p className="text-slate-400 mt-1">
                +91 9431331490
              </p>

            </div>


            <div className="mee-card border border-blue-400/15 bg-white/[0.04] backdrop-blur-md rounded-2xl p-7 hover:border-blue-400/40">

              <p className="text-blue-400 font-bold">
                EMAIL
              </p>

              <h3 className="text-lg font-bold mt-3 break-all">
                mee.ranchi25@gmail.com
              </h3>

            </div>


            <div className="mee-card border border-blue-400/15 bg-white/[0.04] backdrop-blur-md rounded-2xl p-7 hover:border-blue-400/40">

              <p className="text-blue-400 font-bold">
                LOCATION
              </p>

              <h3 className="text-xl font-bold mt-3">
                Ranchi, Jharkhand
              </h3>

              <p className="text-slate-400 mt-1">
                India
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white border-t border-blue-400/10">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16">

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">

            <div>

              <h2 className="text-2xl font-bold">
                MANI ELECTRICALS
              </h2>

              <p className="text-blue-400 mt-1">
                & ELECTRONICS
              </p>

              <p className="text-blue-200/70 leading-7 mt-5 max-w-md">
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

                <Link
                  to="/"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  About Us
                </Link>

                <Link
                  to="/products"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  Products
                </Link>

                <Link
                  to="/services"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  Services
                </Link>

                <Link
                  to="/why-choose-us"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  Why Choose Us
                </Link>

                <Link
                  to="/contact"
                  className="text-blue-200/70 hover:text-white transition"
                >
                  Contact
                </Link>

              </div>

            </div>


            <div>

              <h3 className="text-lg font-bold">
                Contact
              </h3>

              <p className="text-blue-200/70 mt-5">
                Ranchi, Jharkhand - India
              </p>

              <p className="text-blue-200/70 mt-2">
                +91 8235634151
              </p>

              <p className="text-blue-200/70 mt-1">
                +91 9431331490
              </p>

              <p className="text-blue-200/70 mt-2 break-all">
                mee.ranchi25@gmail.com
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-blue-800/40">

          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 text-center">

            <p className="text-blue-300/60 text-sm">
              © 2026 Mani Electricals & Electronics. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;