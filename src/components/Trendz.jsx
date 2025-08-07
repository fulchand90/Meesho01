import React from "react";

const trendzItems = [
  { img: "/assets/summerdresses.webp", label: "Summer Dresses" },
  { img: "/assets/baggyjeans.webp", label: "Baggy Jeans" },
  { img: "/assets/earingns.webp", label: "Earingns" },
  { img: "/assets/chicflats.webp", label: "Chic Flats" },
];

function Trendz() {
  return (
    <div className="trendz">
      <img src="/assets/trendz.webp" alt="Trendz Banner" />
      <div className="shopnow-trendz">Shop Now</div>
      <div className="trendz-collection">
        {trendzItems.map((item, index) => (
          <a href="#" key={index}>
            <img src={item.img} alt={item.label} />
            <p>{item.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Trendz;
