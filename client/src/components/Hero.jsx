import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div>

            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-yellow-400" />

              <p className="text-blue-200 font-semibold tracking-[0.25em] uppercase text-sm">
                Mani Electricals & Electronics
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Reliable Electrical{" "}
              <span className="text-yellow-400">
                & Power Solutions
              </span>
            </h1>

            <p className="max-w-2xl text-blue-100 text-lg md:text-xl leading-8 mt-8">
              Engineering, manufacturing and supply of electrical
              solutions for industrial power systems, with a
              specialized focus on Restricted Neutral Grounding Systems.
            </p>

            <p className="max-w-xl text-blue-200 leading-7 mt-5">
              From grounding solutions and electrical equipment to
              testing, commissioning and transformer-related services,
              we support industrial electrical requirements with
              dependable solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/products"
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-lg font-bold transition shadow-lg"
              >
                Explore Solutions →
              </Link>

              <Link
                to="/contact"
                className="border border-white/40 hover:bg-white hover:text-blue-950 px-8 py-4 rounded-lg font-bold transition"
              >
                Request a Quote
              </Link>

            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-7 mt-10 text-sm">

              <div>
                <p className="font-bold text-white">
                  433V / 550V
                </p>
                <p className="text-blue-200">
                  Low Voltage Systems
                </p>
              </div>

              <div className="w-px bg-white/20" />

              <div>
                <p className="font-bold text-white">
                  3.3KV / 6.6KV
                </p>
                <p className="text-blue-200">
                  Industrial Applications
                </p>
              </div>

              <div className="w-px bg-white/20" />

              <div>
                <p className="font-bold text-white">
                  Up to 11KV
                </p>
                <p className="text-blue-200">
                  Power Solutions
                </p>
              </div>

            </div>
          </div>


          {/* ================= RIGHT ANIMATED PANEL ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Outer floating box */}
            <div className="relative w-full max-w-[500px]">

              <div className="absolute -inset-5 bg-blue-400/10 rounded-[30px] blur-2xl" />

              <div
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-2xl animate-[float_5s_ease-in-out_infinite]"
              >

                {/* Header */}
                <div className="flex items-center justify-between mb-5">

                  <div>
                    <p className="text-xs text-blue-200 tracking-[0.2em] uppercase">
                      Industrial Power System
                    </p>

                    <h2 className="text-xl font-bold mt-1">
                      NGR Control System
                    </h2>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 bg-green-400/10 border border-green-300/30 px-3 py-2 rounded-full">

                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                    </span>

                    <span className="text-xs font-semibold text-green-300">
                      SYSTEM ACTIVE
                    </span>

                  </div>
                </div>


                {/* Main technical panel */}
                <div className="relative bg-slate-950/70 rounded-2xl border border-blue-300/20 p-6 overflow-hidden">

                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                      backgroundSize: "30px 30px"
                    }}
                  />

                  {/* Circuit */}
                  <div className="relative">

                    <div className="flex items-center justify-between">

                      {/* Input */}
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-xl bg-blue-900/70 border border-blue-400/40 flex items-center justify-center">
                          <span className="text-3xl">⚡</span>
                        </div>

                        <p className="text-xs text-blue-200 mt-2">
                          POWER INPUT
                        </p>
                      </div>


                      {/* Animated line */}
                      <div className="flex-1 mx-3">

                        <div className="relative h-1 bg-blue-400/20 rounded">

                          <div className="absolute h-1 w-12 bg-yellow-400 rounded animate-[electric_1.5s_linear_infinite]" />

                        </div>

                      </div>


                      {/* NGR */}
                      <div className="text-center">

                        <div className="w-24 h-24 rounded-2xl bg-blue-700/50 border-2 border-yellow-400/70 flex items-center justify-center relative">

                          {/* Pulse ring */}
                          <div className="absolute inset-2 rounded-xl border border-yellow-400/30 animate-pulse" />

                          <div>
                            <p className="text-yellow-400 font-bold text-lg">
                              NGR
                            </p>

                            <p className="text-[10px] text-blue-200">
                              GROUNDING
                            </p>
                          </div>

                        </div>

                        <p className="text-xs text-blue-200 mt-2">
                          NEUTRAL
                        </p>

                      </div>


                      {/* Animated line */}
                      <div className="flex-1 mx-3">

                        <div className="relative h-1 bg-blue-400/20 rounded">

                          <div className="absolute right-0 h-1 w-12 bg-yellow-400 rounded animate-[electric_1.5s_linear_infinite]" />

                        </div>

                      </div>


                      {/* Output */}
                      <div className="text-center">

                        <div className="w-20 h-20 rounded-xl bg-blue-900/70 border border-blue-400/40 flex items-center justify-center">

                          <span className="text-3xl">
                            ◉
                          </span>

                        </div>

                        <p className="text-xs text-blue-200 mt-2">
                          SYSTEM
                        </p>

                      </div>

                    </div>


                    {/* Technical information */}
                    <div className="grid grid-cols-3 gap-3 mt-8">

                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <p className="text-[10px] text-blue-300">
                          VOLTAGE
                        </p>
                        <p className="font-bold mt-1">
                          433V
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <p className="text-[10px] text-blue-300">
                          SYSTEM
                        </p>
                        <p className="font-bold mt-1">
                          3-PHASE
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                        <p className="text-[10px] text-blue-300">
                          STATUS
                        </p>
                        <p className="font-bold text-green-400 mt-1">
                          NORMAL
                        </p>
                      </div>

                    </div>

                  </div>
                </div>


                {/* Bottom features */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">

                    <p className="text-yellow-400 text-xs font-bold">
                      PROTECTION
                    </p>

                    <p className="font-semibold mt-1">
                      Neutral Grounding
                    </p>

                    <p className="text-xs text-blue-200 mt-1">
                      Reliable fault protection
                    </p>

                  </div>


                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">

                    <p className="text-yellow-400 text-xs font-bold">
                      APPLICATION
                    </p>

                    <p className="font-semibold mt-1">
                      Industrial Power
                    </p>

                    <p className="text-xs text-blue-200 mt-1">
                      Engineered for industry
                    </p>

                  </div>

                </div>


                {/* Bottom status */}
                <div className="flex items-center justify-between mt-5 px-1">

                  <p className="text-xs text-blue-200">
                    Electrical Engineering Solutions
                  </p>

                  <div className="flex gap-1">

                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-blue-300" />

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>


        {/* ================= CORE EXPERTISE ================= */}
        <div className="grid md:grid-cols-3 mt-20 border-y border-white/20">

          <div className="py-7 md:pr-8 md:border-r border-white/20">

            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
              Core Expertise
            </p>

            <h3 className="text-xl font-bold mt-2">
              Restricted Neutral Grounding
            </h3>

            <p className="text-blue-200 text-sm mt-2 leading-6">
              Grounding solutions for industrial power-system applications.
            </p>

          </div>


          <div className="py-7 md:px-8 md:border-r border-white/20">

            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
              Testing
            </p>

            <h3 className="text-xl font-bold mt-2">
              Electrical & Transformer Testing
            </h3>

            <p className="text-blue-200 text-sm mt-2 leading-6">
              Testing and related technical services for electrical systems.
            </p>

          </div>


          <div className="py-7 md:pl-8">

            <p className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
              Solutions
            </p>

            <h3 className="text-xl font-bold mt-2">
              Industrial Power Requirements
            </h3>

            <p className="text-blue-200 text-sm mt-2 leading-6">
              Practical solutions designed around project requirements.
            </p>

          </div>

        </div>

      </div>


      {/* Custom animations */}
      <style>{`

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes electric {
          0% {
            left: 0%;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            left: 100%;
            opacity: 0;
          }
        }

      `}</style>

    </section>
  );
};

export default Hero;