import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "High Voltage Test",
    short: "High Voltage Testing",
    description:
      "High voltage testing services for electrical equipment and systems to support safe and dependable electrical operation.",
    details:
      "Testing activities are carried out for electrical equipment and systems where high voltage performance and insulation reliability are important.",
  },
  {
    number: "02",
    title: "Current Injection Test",
    short: "Current Injection",
    description:
      "Current injection testing as part of electrical testing activities for electrical protection and system verification.",
    details:
      "Current injection testing helps evaluate the response and operation of electrical protection arrangements under controlled testing conditions.",
  },
  {
    number: "03",
    title: "Relay Test",
    short: "Protection Relay Testing",
    description:
      "Relay testing for electrical protection systems with a focus on dependable protection and monitoring.",
    details:
      "Testing activities help verify relay operation and support reliable performance of electrical protection systems.",
  },
  {
    number: "04",
    title: "Circuit Breaker & Transformer Testing",
    short: "Equipment Testing",
    description:
      "Testing of circuit breakers and transformers as part of electrical equipment testing and maintenance activities.",
    details:
      "Testing supports the assessment of important electrical equipment used in industrial power-system applications.",
  },
  {
    number: "05",
    title: "Transformer Filtration",
    short: "Online Transformer Filtration",
    description:
      '"ON LINE" filtration of transformer by vehicle mounted high vacuum filtration plant.',
    details:
      "Transformer filtration is carried out using a vehicle-mounted high vacuum filtration plant to support transformer maintenance requirements.",
  },
  {
    number: "06",
    title: "Transformer Overhauling & Acidity Test",
    short: "Transformer Maintenance",
    description:
      "Periodical overhauling of transformers along with acidity testing for transformer maintenance activities.",
    details:
      "Maintenance activities include transformer overhauling and acidity testing to support dependable transformer operation.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 text-white"
    >
      <div className="absolute -top-32 -left-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute top-1/2 -right-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-6 sm:w-10 bg-yellow-400" />

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-400">
              Our Services
            </p>

            <span className="h-[2px] w-6 sm:w-10 bg-yellow-400" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Electrical Testing &

            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent">
              Transformer Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
            Mani Electricals & Electronics undertakes electrical testing,
            transformer testing and transformer maintenance related activities
            for industrial electrical systems and power-system requirements.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 sm:leading-7 text-slate-400">
            From electrical protection testing to transformer filtration and
            maintenance, our services are focused on supporting safe,
            dependable and efficient electrical system operation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/[0.10] hover:shadow-2xl hover:shadow-blue-900/30"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/25" />

              <div className="relative flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl border border-blue-400/20 bg-blue-500/10 text-base sm:text-lg font-extrabold text-blue-400 transition-all duration-500 group-hover:border-yellow-400/40 group-hover:bg-yellow-400 group-hover:text-slate-950">
                  {service.number}
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service
                  </span>
                </div>
              </div>

              <div className="relative mt-6 sm:mt-7">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400">
                  {service.short}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug text-white transition-colors duration-300 sm:text-2xl group-hover:text-blue-300">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 sm:mt-5 sm:text-base sm:leading-7 text-slate-300">
                  {service.description}
                </p>

                <p className="mt-4 text-xs leading-6 sm:text-sm text-slate-400">
                  {service.details}
                </p>
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Mani Electricals
                </span>

                <Link
                  to="/contact"
                  className="text-lg text-blue-400 transition-all duration-300 group-hover:translate-x-2 group-hover:text-yellow-400"
                >
                  →
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl sm:mt-16 sm:rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-500/10 p-5 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-yellow-400">
                Reliable Electrical Support
              </p>

              <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                Testing. Maintenance. Dependable Solutions.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 text-slate-300">
                Supporting industrial electrical requirements with testing and
                transformer-related services.
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full shrink-0 rounded-xl bg-yellow-400 px-6 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-yellow-400/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Enquire Now →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;