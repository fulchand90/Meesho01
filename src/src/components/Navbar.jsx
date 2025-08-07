import React from "react";
import logo from "/assets/meeshoLogo.svg"; // Adjust if you move the file

function Navbar() {
  return (
    <div className="full-nav">
      <div className="outer">
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
          <p>Beocome a supplier</p>
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
