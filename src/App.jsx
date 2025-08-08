import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Policy from "./components/Policy";
import Collection from "./components/Collection";
import Gold from "./components/Gold";
import BrandSection from "./components/BrandSection";
import Trendz from "./components/Trendz";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import "./index.css";

// Home Page Component
function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Policy />
      <Collection />
      <Gold />
      <BrandSection />
      <Trendz />
      <Products />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
