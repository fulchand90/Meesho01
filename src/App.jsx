import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Policy from "./components/Policy";
import Collection from "./components/Collection";
import Gold from "./components/Gold";
import BrandSection from "./components/BrandSection";
import Trendz from "./components/Trendz";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./index.css"; // Include your current style.css here

function App() {
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

export default App;
