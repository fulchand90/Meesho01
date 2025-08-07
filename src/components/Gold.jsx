import React from "react";
import goldBanner from "/assets/goldbanner.webp";
import lehengas from "/assets/lehengas.webp";
import mentraditional from "/assets/mentraditional.webp";
import sarees from "/assets/sarees.webp";
import jewellery from "/assets/jewellery.webp";

function Gold() {
  return (
    <div className="gold">
      <img src={goldBanner} alt="Gold Banner" />
      <div className="shop-now-gold">Shop Now</div>
      <div className="gold-img">
        <img src={lehengas} alt="Lehengas" />
        <img src={mentraditional} alt="Men Traditional" />
        <img src={sarees} alt="Sarees" />
        <img src={jewellery} alt="Jewellery" />
      </div>
    </div>
  );
}

export default Gold;
