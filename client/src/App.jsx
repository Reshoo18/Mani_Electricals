import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import WhyChoose from "./pages/WhyChoose";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Admin from "./pages/admin";
import EditProduct from "./pages/editProduct";
import AddProduct from "./pages/addProduct";
import ChangePassword from "./pages/changePassword";
import ProductDetails from "./pages/productDetails";
import ScrollToTop from "./pages/scrollOnTop";
import ForgotPassword from "./pages/forgotPassword";

const App = () => {
  return (
    <BrowserRouter>

      {/* Navbar har page par rahega */}
      <Navbar />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Product />} />

        <Route path="/services" element={<Services />} />

        <Route path="/why-choose-us" element={<WhyChoose />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
                 <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />
        <Route path="/admin" element={<Admin/>} />

        <Route path="/admin/products/add" element={<AddProduct />} />

<Route
    path="/admin/products/edit/:id"
    element={<EditProduct/>}
/>

<Route
    path="/admin/change-password"
    element={<ChangePassword />}
/>

<Route path="/products/:id" element={<ProductDetails />} />
  
      </Routes>

    </BrowserRouter>
  );
};

export default App;