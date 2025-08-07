import React from "react";

const collectionItems = [
  { img: "/assets/ethnicwear.webp", label: "Ethnic Wear" },
  { img: "/assets/westerndress.webp", label: "Western Dresses" },
  { img: "/assets/menswear.webp", label: "Mens Wear" },
  { img: "/assets/footwear.webp", label: "Footwear" },
  { img: "/assets/homedecor.webp", label: "Home Decor" },
  { img: "/assets/beauty.webp", label: "Beauty" },
  { img: "/assets/accessories.webp", label: "Accessories" },
  { img: "/assets/grocery.webp", label: "Grocery" },
];

function Collection() {
  return (
    <div className="collection">
      {collectionItems.map((item, index) => (
        <div className="collection-item" key={index}>
          <a href="#">
            <img src={item.img} alt={item.label} />
            <p>{item.label}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Collection;
