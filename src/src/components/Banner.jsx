import React from "react";
import bannerImg from "/assets/meesho background.webp";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Meesho Banner" className="img-banner" />
      <div className="img-content">
        <div className="img-text">
          <div>Smart Shopping</div>
          <div>Trusted by Millions</div>
        </div>
        <div className="shop-now">Shop Now</div>
      </div>
    </div>
  );
}

export default Banner;
