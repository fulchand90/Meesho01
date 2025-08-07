import React from "react";

const brandLogos = [
  "mi",
  "plom",
  "nivea",
  "wildstone",
  "himalya",
  "mamaearth",
  "wowimg",
  "bata",
  "mi",
  "plom",
  "nivea",
  "wildstone",
  "himalya",
  "mamaearth",
  "wowimg",
  "bata",
];

function BrandSection() {
  return (
    <div className="brand-section">
      <div className="brand-inner">
        <div className="brand-loop">
          {brandLogos.map((logo, index) => (
            <div className="brand-name" key={index}>
              <img src={`/assets/${logo}.webp`} alt={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandSection;
