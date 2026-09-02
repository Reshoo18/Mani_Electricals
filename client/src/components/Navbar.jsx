import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-500/20 bg-[#020817]/95 shadow-xl shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-5 sm:px-6">

        <Link to="/" className="shrink-0 leading-none">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wide text-white sm:text-2xl">
              MANI
            </span>

            <span className="text-xl font-black tracking-wide text-blue-400 sm:text-2xl">
              ELECTRICALS
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-7 bg-yellow-400" />

            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-300 sm:text-xs">
              & ELECTRONICS
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">

          <Link
            to="/"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            About Us
          </Link>

          <Link
            to="/products"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/services"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            to="/why-choose-us"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            Why Choose Us
          </Link>

          <Link
            to="/contact"
            className="font-semibold text-slate-200 transition hover:text-blue-400"
          >
            Contact
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/admin"
                className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2.5 font-bold text-blue-300 transition hover:bg-blue-500/20"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2.5 font-bold text-red-300 transition hover:bg-red-500/20"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2.5 font-bold text-blue-300 transition hover:bg-blue-500/20"
            >
              Admin use
            </Link>
          )}

          <Link
            to="/contact"
            className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-[#06112f] shadow-lg shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Request a Quote
          </Link>

        </div>

        <div className="flex items-center gap-2 lg:hidden">

          {isLoggedIn ? (
            <>
              <Link
                to="/admin"
                className="rounded-lg border border-blue-500/50 px-3 py-2 text-sm font-bold text-blue-300"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-lg border border-red-500/40 px-3 py-2 text-sm font-bold text-red-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-lg border border-blue-500/50 px-3 py-2 text-sm font-bold text-blue-300"
            >
             login
            </Link>
          )}

          <Link
            to="/contact"
            className="rounded-lg bg-yellow-400 px-3 py-2 text-sm font-black text-[#06112f]"
          >
            Quote
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;