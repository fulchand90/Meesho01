import React from "react";
import returnsIcon from "/assets/returns.svg";
import codIcon from "/assets/cod.svg";
import priceIcon from "/assets/lowest-price.svg";

function Policy() {
  return (
    <div className="policy">
      <div className="child-box">
        <div className="child-boxs">
          <img src={returnsIcon} alt="Returns" />
          <p>7 Days Easy Returns</p>
        </div>
        <div className="policy-line"></div>
        <div className="child-boxs">
          <img src={codIcon} alt="COD" />
          <p>Cash on Delivery</p>
        </div>
        <div className="policy-line"></div>
        <div className="child-boxs">
          <img src={priceIcon} alt="Lowest Price" />
          <p>Lowest Price</p>
        </div>
      </div>
    </div>
  );
}

export default Policy;
