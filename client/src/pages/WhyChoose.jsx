import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "ISO 9001:2015",
    tag: "QUALITY MANAGEMENT",
    description:
      "Our company documentation identifies ISO 9001:2015 certification, reflecting a structured approach towards quality management and dependable electrical solutions.",
  },
  {
    number: "02",
    title: "ISO 45001:2018",
    tag: "OCCUPATIONAL SAFETY",
    description:
      "Our company documentation identifies ISO 45001:2018 certification, supporting a strong focus on occupational safety across electrical activities.",
  },
  {
    number: "03",
    title: "Electrical Solutions",
    tag: "CORE EXPERTISE",
    description:
      "We provide solutions focused on Restricted Neutral Grounding Systems and related electrical equipment for industrial power-system requirements.",
  },
  {
    number: "04",
    title: "Testing & Maintenance",
    tag: "TECHNICAL SERVICES",
    description:
      "Our technical activities include electrical testing along with transformer testing, filtration, overhauling and related maintenance requirements.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-[2px] bg-yellow-400" />

            <p className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-sm">
              Why Mani Electricals
            </p>

            <span className="w-10 h-[2px] bg-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Built Around
            <span className="text-yellow-400"> Safety, Quality </span>
            & Reliability
          </h2>

          <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
            Mani Electricals & Electronics combines electrical engineering
            solutions, grounding systems, testing activities and maintenance
            services with a strong focus on dependable industrial power
            requirements.
          </p>

        </div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
            <div className="text-3xl font-extrabold text-yellow-400">
              01
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Quality Certification
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
            <div className="text-3xl font-extrabold text-yellow-400">
              01
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Safety Certification
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
            <div className="text-3xl font-extrabold text-yellow-400">
              11KV
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Power Applications
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-5 text-center">
            <div className="text-3xl font-extrabold text-yellow-400">
              360°
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Electrical Support
            </p>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] backdrop-blur-md p-8 md:p-9 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.13] hover:border-yellow-400/40 hover:shadow-2xl"
            >

              {/* Animated Glow */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl transition-all duration-500 group-hover:bg-yellow-400/20" />

              <div className="relative">

                {/* Top */}
                <div className="flex items-start justify-between gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-blue-950 flex items-center justify-center font-extrabold text-lg shadow-lg shadow-yellow-500/20">
                    {item.number}
                  </div>

                  <span className="px-4 py-2 rounded-full border border-blue-300/20 bg-blue-400/10 text-blue-200 text-xs font-semibold tracking-wider">
                    {item.tag}
                  </span>

                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mt-7 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-blue-100/80 leading-8 mt-4">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="flex items-center gap-3 mt-7">

                  <span className="w-8 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-16" />

                  <span className="text-sm font-semibold text-blue-200">
                    Mani Electricals & Electronics
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-blue-700/70 to-indigo-700/70 p-8 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7">

            <div>
              <p className="text-yellow-400 font-bold uppercase tracking-wider text-sm">
                Dependable Electrical Solutions
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                Engineering with safety at every step.
              </h3>

              <p className="text-blue-100 mt-3 max-w-2xl leading-7">
                From grounding systems to electrical testing and
                transformer-related services, our solutions are designed
                around industrial electrical requirements.
              </p>
            </div>

           <Link
              to="/contact"
              className="w-full shrink-0 rounded-xl bg-yellow-400 px-6 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Talk to us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;