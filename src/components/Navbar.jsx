import React, { useState } from "react";
import logo from "/assets/meeshoLogo.svg"; // Adjust if you move the file

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="full-nav">
      <div className="outer">
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className="logo-title">
          <a href="/">
            <img src={logo} alt="Meesho Logo" />
          </a>
        </div>
        
        <div className="search-title">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Try Saree, Kurti or Search By" />
        </div>
        
        <div className="icons">
          <p>Become a supplier</p>
          <div className="line"></div>
          <p>Investors relations</p>
          <div className="line"></div>
          <div className="user">
            <i className="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
          <div className="user">
            <i className="fa-solid fa-cart-plus"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-nav-menu active" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <img src={logo} alt="Meesho Logo" style={{height: '32px', width: '120px'}} />
              <button className="close-btn" onClick={toggleMobileMenu}>×</button>
            </div>
            <div className="mobile-nav-items">
              <div className="mobile-nav-item">
                <i className="fa-solid fa-user"></i>
                <span>Profile</span>
              </div>
              <div className="mobile-nav-item">
                <i className="fa-solid fa-cart-plus"></i>
                <span>Cart</span>
              </div>
              <div className="mobile-nav-item">
                <span>Become a supplier</span>
              </div>
              <div className="mobile-nav-item">
                <span>Investors relations</span>
              </div>
            </div>
            <div className="mobile-nav-categories">
              <h4>Categories</h4>
              {[
                "Women Ethnic",
                "Women Western", 
                "Men",
                "Kids",
                "Home & Kitchen",
                "Beauty & Health",
                "Jewellery & Accessories",
                "Bags & Footwear",
                "Electronics"
              ].map((item, i) => (
                <div className="mobile-nav-category" key={i}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="mid-line"></div>
      <div className="box">
        <div className="nav-down">
          {[
            "Women Ethnic",
            "Women Western",
            "Men",
            "Kids",
            "Home & Kitchen",
            "Beauty & Health",
            "Jwellery & Accessories",
            "Bags & Footwear",
            "Electronics",
            "Sports & Fitness",
            "Car & Motorbike",
            "Office Supplies & Stationary",
            "Pet Supplies",
            "Food & Drinks",
            "Music Instruments",
            "Books",
          ].map((item, i) => (
            <div className="nav-list" key={i}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mid-line"></div>
    </div>
  );
}

export default Navbar;
