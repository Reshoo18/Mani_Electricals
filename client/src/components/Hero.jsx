import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white"
    >
      <div className="absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px]" />

      <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-3xl sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <div className="mb-5 flex items-center justify-center gap-3 sm:mb-7 lg:justify-start">
              <div className="h-[2px] w-8 bg-yellow-400 sm:w-10" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 sm:text-sm sm:tracking-[0.25em]">
                Mani Electricals & Electronics
              </p>
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable Electrical{" "}
              <span className="text-yellow-400">
                & Power Solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl lg:mx-0">
              Engineering, manufacturing and supply of electrical
              solutions for industrial power systems, with a
              specialized focus on Restricted Neutral Grounding Systems.
            </p>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-200 sm:mt-5 lg:mx-0">
              From grounding solutions and electrical equipment to
              testing, commissioning and transformer-related services,
              we support industrial electrical requirements with
              dependable solutions.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row lg:justify-start">

              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3.5 font-bold text-blue-950 shadow-lg transition hover:bg-yellow-300 sm:px-8 sm:py-4"
              >
                Explore Solutions →
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3.5 font-bold transition hover:bg-white hover:text-blue-950 sm:px-8 sm:py-4"
              >
                Request a Quote
              </Link>

            </div>

            {/* Trust */}

            <div className="mt-9 flex flex-wrap items-center justify-center gap-5 text-sm sm:mt-10 sm:gap-7 lg:justify-start">

              <div className="text-center lg:text-left">
                <p className="font-bold text-white">
                  433V / 550V
                </p>

                <p className="text-blue-200">
                  Low Voltage Systems
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/20 sm:block" />

              <div className="text-center lg:text-left">
                <p className="font-bold text-white">
                  3.3KV / 6.6KV
                </p>

                <p className="text-blue-200">
                  Industrial Applications
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/20 sm:block" />

              <div className="text-center lg:text-left">
                <p className="font-bold text-white">
                  Up to 11KV
                </p>

                <p className="text-blue-200">
                  Power Solutions
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT TECHNICAL PANEL */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[500px]">

              <div className="absolute -inset-3 rounded-[30px] bg-blue-400/10 blur-2xl sm:-inset-5" />

              <div className="relative rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md sm:p-5">

                {/* Header */}

                <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-blue-200 sm:text-xs sm:tracking-[0.2em]">
                      Industrial Power System
                    </p>

                    <h2 className="mt-1 text-lg font-bold sm:text-xl">
                      NGR Control System
                    </h2>
                  </div>

                  <div className="flex w-fit items-center gap-2 rounded-full border border-green-300/30 bg-green-400/10 px-2.5 py-1.5 sm:px-3 sm:py-2">

                    <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                    </span>

                    <span className="text-[10px] font-semibold text-green-300 sm:text-xs">
                      SYSTEM ACTIVE
                    </span>

                  </div>

                </div>


                {/* Main Technical Panel */}

                <div className="relative overflow-hidden rounded-2xl border border-blue-300/20 bg-slate-950/70 p-3 sm:p-6">

                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />

                  <div className="relative">

                    {/* Circuit */}

                    <div className="flex items-center justify-between gap-1 sm:gap-2">

                      {/* Input */}

                      <div className="shrink-0 text-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-900/70 sm:h-20 sm:w-20">
                          <span className="text-2xl sm:text-3xl">
                            ⚡
                          </span>
                        </div>

                        <p className="mt-2 text-[8px] text-blue-200 sm:text-xs">
                          POWER INPUT
                        </p>

                      </div>


                      {/* Line */}

                      <div className="mx-1 flex-1 sm:mx-3">

                        <div className="relative h-1 rounded bg-blue-400/20">

                          <div className="absolute h-1 w-8 rounded bg-yellow-400 animate-[electric_1.5s_linear_infinite] sm:w-12" />

                        </div>

                      </div>


                      {/* NGR */}

                      <div className="shrink-0 text-center">

                        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-yellow-400/70 bg-blue-700/50 sm:h-24 sm:w-24">

                          <div className="absolute inset-1.5 rounded-xl border border-yellow-400/30 animate-pulse sm:inset-2" />

                          <div>
                            <p className="text-base font-bold text-yellow-400 sm:text-lg">
                              NGR
                            </p>

                            <p className="text-[8px] text-blue-200 sm:text-[10px]">
                              GROUNDING
                            </p>
                          </div>

                        </div>

                        <p className="mt-2 text-[8px] text-blue-200 sm:text-xs">
                          NEUTRAL
                        </p>

                      </div>


                      {/* Line */}

                      <div className="mx-1 flex-1 sm:mx-3">

                        <div className="relative h-1 rounded bg-blue-400/20">

                          <div className="absolute right-0 h-1 w-8 rounded bg-yellow-400 animate-[electric_1.5s_linear_infinite] sm:w-12" />

                        </div>

                      </div>


                      {/* Output */}

                      <div className="shrink-0 text-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-900/70 sm:h-20 sm:w-20">

                          <span className="text-2xl sm:text-3xl">
                            ◉
                          </span>

                        </div>

                        <p className="mt-2 text-[8px] text-blue-200 sm:text-xs">
                          SYSTEM
                        </p>

                      </div>

                    </div>


                    {/* Technical Information */}

                    <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">

                      <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">

                        <p className="text-[8px] text-blue-300 sm:text-[10px]">
                          VOLTAGE
                        </p>

                        <p className="mt-1 text-sm font-bold sm:text-base">
                          433V
                        </p>

                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">

                        <p className="text-[8px] text-blue-300 sm:text-[10px]">
                          SYSTEM
                        </p>

                        <p className="mt-1 text-sm font-bold sm:text-base">
                          3-PHASE
                        </p>

                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3">

                        <p className="text-[8px] text-blue-300 sm:text-[10px]">
                          STATUS
                        </p>

                        <p className="mt-1 text-sm font-bold text-green-400 sm:text-base">
                          NORMAL
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Bottom Features */}

                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4">

                    <p className="text-[10px] font-bold text-yellow-400">
                      PROTECTION
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      Neutral Grounding
                    </p>

                    <p className="mt-1 text-[10px] text-blue-200 sm:text-xs">
                      Reliable fault protection
                    </p>

                  </div>


                  <div className="rounded-xl border border-white/10 bg-white/10 p-3 sm:p-4">

                    <p className="text-[10px] font-bold text-yellow-400">
                      APPLICATION
                    </p>

                    <p className="mt-1 text-sm font-semibold sm:text-base">
                      Industrial Power
                    </p>

                    <p className="mt-1 text-[10px] text-blue-200 sm:text-xs">
                      Engineered for industry
                    </p>

                  </div>

                </div>


                {/* Bottom Status */}

                <div className="mt-4 flex items-center justify-between px-1">

                  <p className="text-[9px] text-blue-200 sm:text-xs">
                    Electrical Engineering Solutions
                  </p>

                  <div className="flex gap-1">

                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 sm:h-2 sm:w-2" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300 sm:h-2 sm:w-2" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* CORE EXPERTISE */}

        <div className="mt-14 grid border-y border-white/20 md:mt-20 md:grid-cols-3">

          <div className="border-white/20 py-6 md:border-r md:pr-8 md:py-7">

            <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Core Expertise
            </p>

            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Restricted Neutral Grounding
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-200">
              Grounding solutions for industrial power-system applications.
            </p>

          </div>


          <div className="border-white/20 py-6 md:border-r md:px-8 md:py-7">

            <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Testing
            </p>

            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Electrical & Transformer Testing
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-200">
              Testing and related technical services for electrical systems.
            </p>

          </div>


          <div className="py-6 md:pl-8 md:py-7">

            <p className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Solutions
            </p>

            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Industrial Power Requirements
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-200">
              Practical solutions designed around project requirements.
            </p>

          </div>

        </div>

      </div>


      {/* Animations */}

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