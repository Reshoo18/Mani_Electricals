import React from "react";
import ngrImage from "../assets/ngr-433v-open.png";

const capabilities = [
  {
    number: "01",
    title: "Restricted Neutral Grounding",
    description:
      "Restricted Neutral Grounding Systems designed for 433V / 550V and 3.3KV / 6.6KV / 11KV power supply applications.",
  },
  {
    number: "02",
    title: "Electrical Testing",
    description:
      "High Voltage Test, Current Injection Test, Relay Test and testing of circuit breakers and transformers.",
  },
  {
    number: "03",
    title: "Transformer Services",
    description:
      "Transformer filtration, periodic overhauling and acidity testing to support transformer maintenance requirements.",
  },
  {
    number: "04",
    title: "Electrical Protection",
    description:
      "Solutions involving neutral grounding, earth fault protection, leakage monitoring and fail-safe protection arrangements.",
  },
];

const manufacturers = [
  {
    number: "01",
    title: "Restricted Neutral Grounding System",
    description:
      "Restricted Neutral Grounding System solutions for industrial power supply applications.",
  },
  {
    number: "02",
    title: "Resin Cast Current Transformer",
    description:
      "Resin Cast Current Transformer solutions for electrical measurement and protection applications.",
  },
  {
    number: "03",
    title: "Solid State Earth Leakage Relay",
    description:
      "Solid State Earth Leakage Relay and Resin Cast Core Balance Transformer solutions.",
  },
  {
    number: "04",
    title: "Circuit Breaker & Transformer Spares",
    description:
      "Spare parts for circuit breakers and transformers as included in the company product range.",
  },
];

const vendors = [
  {
    number: "01",
    name: "Tata Steel Ltd.",
  },
  {
    number: "02",
    name: "Coal India Ltd.",
  },
  {
    number: "03",
    name: "Uranium Corporation of India Ltd.",
  },
  {
    number: "04",
    name: "Hindustan Copper Ltd.",
  },
];

const technicalHighlights = [
  {
    value: "433V",
    title: "Low Voltage",
    description: "Restricted neutral grounding applications",
  },
  {
    value: "550V",
    title: "Power System",
    description: "Grounding system applications",
  },
  {
    value: "3.3KV",
    title: "Industrial",
    description: "Medium voltage power systems",
  },
  {
    value: "6.6KV",
    title: "Power Systems",
    description: "Industrial electrical applications",
  },
  {
    value: "11KV",
    title: "High Voltage",
    description: "Power supply system applications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white"
    >
      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* =========================================================
            INTRO
        ========================================================== */}
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-yellow-400" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              About Mani Electricals
            </p>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Electrical Engineering Built Around
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Safety, Protection & Reliability
            </span>
          </h2>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-blue-100 md:text-xl">
            Mani Electricals & Electronics is engaged in electrical and
            power-system solutions with a focus on Restricted Neutral
            Grounding Systems and related electrical equipment.
          </p>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
            The company undertakes electrical testing and transformer-related
            maintenance activities, covering high voltage testing, current
            injection testing, relay testing, circuit breaker and transformer
            testing, online transformer filtration, periodic transformer
            overhauling and acidity testing.
          </p>
        </div>

        {/* =========================================================
            MAIN IMAGE + CONTENT
        ========================================================== */}
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <div className="relative group">

            <div className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-50 blur-md transition duration-500 group-hover:opacity-90" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white p-5 shadow-2xl">

              <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-slate-100 p-5">

                <img
                  src={ngrImage}
                  alt="Mani Electricals Restricted Neutral Grounding System"
                  className="h-[360px] w-full object-contain transition duration-700 group-hover:scale-105 md:h-[440px]"
                />

              </div>

              {/* Image Badge */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/20 bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 shadow-2xl md:-right-6">

                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Mani Electricals
                </p>

                <p className="mt-1 text-lg font-extrabold">
                  Electrical Solutions
                </p>

              </div>
            </div>
          </div>

          {/* Content */}
          <div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md md:p-9">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Our Expertise
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                Supporting Industrial
                <span className="text-cyan-300"> Power-System </span>
                Requirements
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Our work is centered around electrical systems where grounding,
                protection, testing and equipment reliability are important.
                The company's documentation specifically covers Restricted
                Neutral Grounding Systems for different power supply levels.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-300">
                The technical documentation describes applications for
                433V / 550V as well as 3.3KV / 6.6KV / 11KV power supply
                systems, including applications in mines and industrial
                electrical environments.
              </p>

              {/* Mini Points */}
              <div className="mt-7 space-y-4">

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 font-black text-slate-950">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Grounding & Protection
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Restricted neutral grounding and protection-oriented
                      electrical system solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-black text-slate-950">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Testing & Maintenance
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Electrical testing and transformer-related maintenance
                      activities for industrial requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 font-black text-white">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold">
                      Industrial Applications
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Electrical solutions supporting power supply and
                      industrial electrical system requirements.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CAPABILITIES
        ========================================================== */}
        <div className="mt-24">

          <div className="mb-10 max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-yellow-400" />

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                What We Do
              </p>
            </div>

            <h3 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Complete Electrical
              <span className="text-cyan-300"> Capabilities</span>
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Our capabilities cover grounding systems, electrical testing,
              transformer services and electrical protection requirements.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.10]"
              >

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-400/20" />

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-lg font-black text-blue-300 ring-1 ring-blue-400/20">
                    {item.number}
                  </div>

                  <h4 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 group-hover:w-full" />

              </div>
            ))}

          </div>
        </div>

        {/* =========================================================
            TECHNICAL RANGE
        ========================================================== */}
        <div className="mt-24 rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-500/10 p-7 md:p-10">

          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Technical Range
              </p>

              <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
                Grounding Systems Across Multiple
                <span className="text-cyan-300"> Voltage Levels</span>
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                The company documentation specifies Restricted Neutral
                Grounding System applications covering 433V / 550V and
                3.3KV / 6.6KV / 11KV power supply systems.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

              {technicalHighlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >

                  <p className="text-2xl font-black text-yellow-400">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =========================================================
            MANUFACTURERS
        ========================================================== */}
        <div className="mt-24">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Product Portfolio
            </p>

            <h3 className="mt-4 text-3xl font-extrabold md:text-5xl">
              What We
              <span className="text-cyan-300"> Manufacture</span>
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
              The company documentation identifies the following electrical
              products and systems within its manufacturing portfolio.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {manufacturers.map((item) => (
              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.10]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 font-black text-slate-950">
                    {item.number}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    MEE
                  </span>

                </div>

                <h4 className="mt-7 text-xl font-bold leading-snug">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-4 text-sm font-semibold text-blue-400">
                  Electrical Solution →
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* =========================================================
            WE UNDERTAKE
        ========================================================== */}
        <div className="mt-24">

          <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-blue-600/10 to-transparent p-8 md:p-10">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Services We Undertake
                </p>

                <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
                  Testing & Transformer
                  <span className="text-cyan-300"> Support</span>
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  Mani Electricals & Electronics undertakes a range of
                  electrical testing and transformer maintenance activities
                  for industrial electrical requirements.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  "High Voltage Test",
                  "Current Injection Test",
                  "Relay Test",
                  "Circuit Breaker & Transformer Testing",
                  "Online Transformer Filtration",
                  "Periodic Transformer Overhauling & Acidity Test",
                ].map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:bg-white/10"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-sm font-black text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="font-semibold text-slate-200">
                      {service}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            REPAIRERS & REWINDERS
        ========================================================== */}
        <div className="mt-16">

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 md:p-9">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Repairers & Rewinders
                </p>

                <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
                  Power & Distribution Transformer
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  The company documentation also identifies Power &
                  Distribution Transformer repairers and rewinders as part of
                  its electrical service capabilities.
                </p>

              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl font-black text-blue-300 ring-1 ring-blue-400/20">
                PT
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================
            VENDORS
        ========================================================== */}
        <div className="mt-24">

          <div className="text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-yellow-400" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                Our Vendors
              </p>

              <span className="h-[2px] w-10 bg-yellow-400" />
            </div>

            <h3 className="text-3xl font-extrabold md:text-5xl">
              Trusted Industrial
              <span className="text-cyan-300"> Associations</span>
            </h3>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
              The company document lists the following organizations under
              its vendor references.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {vendors.map((vendor) => (
              <div
                key={vendor.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-blue-950/50"
              >

                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-yellow-400/10" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 font-black text-slate-950">
                      {vendor.number}
                    </div>

                    <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />

                  </div>

                  <h4 className="mt-8 min-h-[60px] text-xl font-bold leading-snug">
                    {vendor.name}
                  </h4>

                  <div className="mt-5 h-px bg-white/10" />

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Vendor
                    </span>

                    <span className="text-xl text-blue-400 transition duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                      →
                    </span>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* =========================================================
            COMPLIANCE / CLOSING
        ========================================================== */}
        <div className="mt-24">

          <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/10 p-8 md:p-10">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Quality & Safety
                </p>

                <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Engineering Solutions With
                  <span className="text-cyan-300"> Safety in Focus</span>
                </h3>

                <p className="mt-5 max-w-3xl leading-8 text-slate-300">
                  Mani Electricals & Electronics' company documentation
                  identifies ISO 9001:2015 and ISO 45001:2018 certifications,
                  reflecting its focus on quality management and occupational
                  safety.
                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-md">
                  <p className="text-2xl font-black text-yellow-400">
                    ISO
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    9001:2015
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Quality
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-md">
                  <p className="text-2xl font-black text-cyan-300">
                    ISO
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    45001:2018
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Safety
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL STATEMENT
        ========================================================== */}
        <div className="mt-16 text-center">

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300">
            From Restricted Neutral Grounding Systems to electrical testing,
            transformer services and maintenance support, Mani Electricals &
            Electronics is focused on dependable solutions for industrial
            power-system requirements.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-200">
              ✓ Dependable Solutions
            </span>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200">
              ✓ Industrial Applications
            </span>

            <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-200">
              ✓ Safety Focused
            </span>

            <span className="rounded-full border border-green-400/20 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-200">
              ✓ Testing & Maintenance
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;