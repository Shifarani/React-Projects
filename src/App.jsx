import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Products from "./pages/Products"; // ✅ NEW IMPORT

import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      {/* ROUTES SYSTEM */}
      <Routes>
        {/* 🏠 Home */}
        <Route path="/" element={<Home />} />

        {/* 🛒 Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* 📦 Products */}
        <Route path="/products" element={<Products />} />

        {/* 📂 Categories */}
        <Route path="/categories" element={<Categories />} />

        {/* ℹ️ About */}
        <Route path="/about" element={<About />} />

        {/* 📞 Contact */}
        <Route path="/contact" element={<Contact />} />

       
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;