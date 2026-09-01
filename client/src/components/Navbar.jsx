import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-[84px] flex items-center justify-between">

        <Link to="/" className="leading-tight">
          <h1 className="text-xl md:text-2xl font-bold text-blue-900">
            MANI ELECTRICALS
          </h1>
          <p className="text-xs md:text-sm text-gray-500 tracking-wide">
            & ELECTRONICS
          </p>
        </Link>

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            About Us
          </Link>

          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Products
          </Link>

          <Link
            to="/services"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            to="/why-choose-us"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Why Choose Us
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Contact
          </Link>

        </div>

        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Request a Quote
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;