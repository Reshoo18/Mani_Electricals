import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import WhyChoose from "./pages/WhyChoose";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>

      {/* Navbar har page par rahega */}
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Product />} />

        <Route path="/services" element={<Services />} />

        <Route path="/why-choose-us" element={<WhyChoose />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;