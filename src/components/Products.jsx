import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productList = [
  {
    img: "/assets/im1.webp",
    name: "New collection of selfie s...",
    price: "₹ 750",
    rating: "4.1",
    reviews: "139",
  },
  {
    img: "/assets/img2.webp",
    name: "Graceful fridge cover",
    price: "₹ 149",
    rating: "4.4",
    reviews: "2342",
  },
  {
    img: "/assets/img3.webp",
    name: "Chitrekha Attractive Kurtis",
    price: "₹ 189",
    rating: "4.0",
    reviews: "82347",
  },
  {
    img: "/assets/img4.webp",
    name: "Trendy Retro Mens Shirts",
    price: "₹ 150",
    rating: "4.0",
    reviews: "32678",
  },
  {
    img: "/assets/img5.webp",
    name: "Classic Mens Shirt",
    price: "₹ 209",
    rating: "4.2",
    reviews: "31590",
  },
  {
    img: "/assets/img6.webp",
    name: "Aagam Woman Dupatta",
    price: "₹ 609",
    rating: "3.9",
    reviews: "10678",
  },
  {
    img: "/assets/img7.webp",
    name: "Attractive Party Supplies",
    price: "₹ 109",
    rating: "4.1",
    reviews: "548",
  },
  {
    img: "/assets/img8.webp",
    name: "Rayfiels Casual shoes",
    price: "₹ 349",
    rating: "4.2",
    reviews: "13565",
  },
  {
    img: "/assets/img9.webp",
    name: "Partywear Mens Shirt",
    price: "₹ 345",
    rating: "4.0",
    reviews: "32678",
  },
  {
    img: "/assets/img10.webp",
    name: "Aishani Ensemble Sarees",
    price: "₹ 469",
    rating: "4.0",
    reviews: "8056",
  },
  {
    img: "/assets/img11.webp",
    name: "Lining Mens Shirt",
    price: "₹ 209",
    rating: "4.0",
    reviews: "435",
  },
  {
    img: "/assets/img12.webp",
    name: "Stylish Mens Shirt",
    price: "₹ 149",
    rating: "4.0",
    reviews: "7456",
  },
  {
    img: "/assets/img13.webp",
    name: "iPhone 13 Cover",
    price: "₹ 146",
    rating: "4.2",
    reviews: "1678",
  },
  {
    img: "/assets/img14.webp",
    name: "Blutooth Speaker",
    price: "₹ 245",
    rating: "4.1",
    reviews: "435",
  },
  {
    img: "/assets/img15.webp",
    name: "Aritficial Plants",
    price: "₹ 130",
    rating: "4.2",
    reviews: "128",
  },
  {
    img: "/assets/img16.webp",
    name: "Sports Shoes for Men",
    price: "₹ 465",
    rating: "4.4",
    reviews: "8459",
  },
  {
    img: "/assets/img17.webp",
    name: "Graceful Women Kurta",
    price: "₹ 440",
    rating: "4.4",
    reviews: "9348",
  },
  {
    img: "/assets/img18.webp",
    name: "Classic Wallpaper",
    price: "₹ 106",
    rating: "4.1",
    reviews: "782",
  },
  {
    img: "/assets/img19.webp",
    name: "Feminine Chunky Jwellery",
    price: "₹ 184",
    rating: "4.3",
    reviews: "26783",
  },
  {
    img: "/assets/img20.webp",
    name: "Colorful Mens Clogs",
    price: "₹ 310",
    rating: "4.1",
    reviews: "2649",
  },
];

function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleBuyClick = (product, productId) => {
    // Navigate to product page instead of showing modal directly
    navigate(`/product/${productId + 1}`);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId + 1}`);
  };

  return (
    <div className="products">
      <h4>Products For You</h4>
      <div className="product-grid">
        {productList.map((product, index) => (
          <div className="pro-box" key={index}>
            <div onClick={() => handleProductClick(index)} style={{cursor: 'pointer'}}>
              <img src={product.img} alt={product.name} />
              <div className="pro-data">
                <p>{product.name}</p>
                <h5>{product.price}</h5>
                <div className="free-deliver">
                  <span>Free Delivery</span>
                </div>
                <div className="rating">
                  <span>
                    {product.rating}
                    <img src="/assets/star.svg" alt="star" />
                  </span>
                  <p>{product.reviews} Reviews</p>
                </div>
              </div>
            </div>
            <button 
              className="buy-btn"
              onClick={() => handleBuyClick(product, index)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
      
      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal 
          product={selectedProduct}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}

// Payment Modal Component
function PaymentModal({ product, onClose }) {
  const [selectedPayment, setSelectedPayment] = useState('');
  
  const paymentOptions = [
    { id: 'phonepe', name: 'PhonePe', logo: '/assets/phonepe.svg' },
    { id: 'paytm', name: 'Paytm', logo: '/assets/paytm.svg' },
    { id: 'googlepay', name: 'Google Pay', logo: '/assets/googlepay.svg' },
  ];

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    // Simulate payment process
    alert(`Payment initiated via ${selectedPayment}. This is a demo - no actual payment will be processed.`);
    onClose();
  };

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Complete Your Purchase</h3>
        
        <div className="payment-details">
          <h4>{product.name}</h4>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating} ⭐ ({product.reviews} reviews)</p>
          <p>Free Delivery Available</p>
        </div>

        <div className="payment-options">
          <h4>Select Payment Method</h4>
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className={`payment-option ${selectedPayment === option.name ? 'selected' : ''}`}
              onClick={() => setSelectedPayment(option.name)}
            >
              <img src={option.logo} alt={option.name} style={{width: '40px', height: '40px', marginRight: '12px'}} />
              <span>{option.name}</span>
            </div>
          ))}
        </div>

        <div className="payment-buttons">
          <button className="payment-btn secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="payment-btn primary" onClick={handlePayment}>
            Pay {product.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
