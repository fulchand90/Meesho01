import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample product data - in real app this would come from API
const productData = {
  1: {
    id: 1,
    name: "Clothing set for boys and girls",
    price: "₹216",
    originalPrice: "₹499",
    discount: "57% off",
    rating: "4.2",
    reviews: "19587",
    totalReviews: "6809",
    images: [
      "/assets/im1.webp",
      "/assets/img2.webp",
      "/assets/img3.webp",
      "/assets/img4.webp"
    ],
    sizes: [
      { label: "12-18 Months", price: "₹216" },
      { label: "18-24 Months", price: "₹247" },
      { label: "1-2 Years", price: "₹267" },
      { label: "2-3 Years", price: "₹287" },
      { label: "3-4 Years", price: "₹307" },
      { label: "4-5 Years", price: "₹327" },
      { label: "5-6 Years", price: "₹347" },
      { label: "6-7 Years", price: "₹367" },
      { label: "7-8 Years", price: "₹387" },
      { label: "8-9 Years", price: "₹407" },
      { label: "9-10 Years", price: "₹427" }
    ],
    highlights: {
      "Set Type": "Top & Bottom Set",
      "Net Quantity (N)": "Pack Of 6",
      "Top Fabric": "Cotton Blend",
      "Bottom Fabric": "Cotton Blend"
    },
    seller: {
      name: "Kanthan tex",
      rating: "4.1",
      ratings: "26,244",
      followers: "197",
      products: "3"
    },
    offers: [
      "₹191 with 2 Special Offers",
      "Free Delivery"
    ],
    delivery: "7-day Returns",
    reviews: [
      {
        id: 1,
        name: "USHA M BHANDARI",
        rating: 5.0,
        date: "4 Aug 2023",
        comment: "Good product. Happy to purchase kids wear from meesho",
        helpful: 0
      },
      {
        id: 2,
        name: "Meesho User",
        rating: 5.0,
        date: "7 Aug 2023",
        comment: "Wow yea pic me h vesa hi aaya h... super.. thanks meesho... app hi ache hai guys",
        helpful: 1
      }
    ]
  }
};

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = productData[id] || productData[1];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    setShowPaymentModal(true);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    alert('Product added to cart!');
  };

  return (
    <div className="product-page">
      {/* Header */}
      <div className="product-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="header-icons">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-share"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      {/* Add delivery location banner */}
      <div className="delivery-banner">
        <i className="fa-solid fa-location-dot"></i>
        <span>Add delivery location to check extra discount</span>
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      {/* Product Images */}
      <div className="product-images">
        <div className="main-image">
          <img src={product.images[selectedImage]} alt={product.name} />
          <div className="image-indicators">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Similar Products Thumbnail */}
        <div className="similar-products">
          <span className="similar-label">1 Similar Products</span>
          <div className="similar-thumbnail">
            <img src="/assets/img2.webp" alt="Similar product" />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        
        <div className="product-actions">
          <i className="fa-regular fa-heart wishlist-icon"></i>
          <span>Wishlist</span>
          <i className="fa-solid fa-share share-icon"></i>
          <span>Share</span>
        </div>

        <div className="product-pricing">
          <span className="current-price">{product.price}</span>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount">onwards</span>
        </div>

        <div className="special-offers">
          {product.offers.map((offer, index) => (
            <div key={index} className="offer">
              <i className="fa-solid fa-chevron-right"></i>
              <span>{offer}</span>
            </div>
          ))}
        </div>

        <div className="product-rating">
          <div className="rating-badge">
            <span>{product.rating}</span>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="rating-text">{product.reviews} Ratings, {product.totalReviews} Reviews</span>
          <div className="trusted-badge">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Trusted</span>
          </div>
        </div>
      </div>

      {/* Size Selection */}
      <div className="size-selection">
        <h3>Select Size</h3>
        <div className="size-grid">
          {product.sizes.map((size, index) => (
            <div
              key={index}
              className={`size-option ${selectedSize === size.label ? 'selected' : ''}`}
              onClick={() => handleSizeSelect(size.label)}
            >
              <span className="size-label">{size.label}</span>
              <span className="size-price">{size.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seller Info */}
      <div className="seller-info">
        <h3>Sold By</h3>
        <div className="seller-details">
          <div className="seller-avatar">
            <i className="fa-solid fa-store"></i>
          </div>
          <div className="seller-data">
            <div className="seller-header">
              <span className="seller-name">{product.seller.name}</span>
              <button className="view-shop-btn">View Shop</button>
            </div>
            <div className="seller-stats">
              <div className="stat">
                <span className="stat-value">{product.seller.rating}</span>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="stat">
                <span className="stat-value">{product.seller.ratings}</span>
                <span className="stat-label">Ratings</span>
              </div>
              <div className="stat">
                <span className="stat-value">{product.seller.followers}</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">{product.seller.products}</span>
                <span className="stat-label">Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <div className="product-highlights">
        <div className="highlights-header">
          <h3>Product Highlights</h3>
          <button className="copy-btn">COPY</button>
        </div>
        <div className="highlights-grid">
          {Object.entries(product.highlights).map(([key, value]) => (
            <div key={key} className="highlight-item">
              <span className="highlight-label">{key}</span>
              <span className="highlight-value">{value}</span>
            </div>
          ))}
        </div>
        
        <div className="additional-details">
          <span>Additional Details</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Product Ratings & Reviews</h3>
        
        <div className="rating-summary">
          <div className="overall-rating">
            <span className="rating-number">4.2</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fa-solid fa-star"></i>
              ))}
            </div>
            <span className="total-reviews">{product.reviews} Reviews</span>
          </div>
          
          <div className="rating-breakdown">
            <div className="rating-bar">
              <span>Excellent</span>
              <div className="bar">
                <div className="fill" style={{width: '70%'}}></div>
              </div>
              <span>11354</span>
            </div>
            <div className="rating-bar">
              <span>Very Good</span>
              <div className="bar">
                <div className="fill" style={{width: '20%'}}></div>
              </div>
              <span>3171</span>
            </div>
            <div className="rating-bar">
              <span>Good</span>
              <div className="bar">
                <div className="fill" style={{width: '8%'}}></div>
              </div>
              <span>644</span>
            </div>
            <div className="rating-bar">
              <span>Average</span>
              <div className="bar">
                <div className="fill" style={{width: '2%'}}></div>
              </div>
              <span>164</span>
            </div>
            <div className="rating-bar">
              <span>Poor</span>
              <div className="bar">
                <div className="fill" style={{width: '1%'}}></div>
              </div>
              <span>74</span>
            </div>
          </div>
        </div>

        <div className="reviews-list">
          {product.reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <div className="review-rating">
                    <span>{review.rating}</span>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <span className="review-date">Posted on {review.date}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="review-actions">
                <button className="helpful-btn">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-reviews">
          VIEW ALL REVIEWS
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Bottom Features */}
      <div className="bottom-features">
        <div className="feature">
          <i className="fa-solid fa-tag"></i>
          <div>
            <span className="feature-title">Lowest Price</span>
          </div>
        </div>
        <div className="feature">
          <i className="fa-solid fa-truck"></i>
          <div>
            <span className="feature-title">Cash on Delivery</span>
          </div>
        </div>
        <div className="feature">
          <i className="fa-solid fa-undo"></i>
          <div>
            <span className="feature-title">7-day Returns</span>
          </div>
        </div>
      </div>

      <div className="quality-badge">
        <i className="fa-solid fa-shield-halved"></i>
        <span>Best quality products from trusted suppliers</span>
      </div>

      {/* Bottom Action Buttons */}
      <div className="bottom-actions">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <i className="fa-solid fa-cart-plus"></i>
          Add to Cart
        </button>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          <i className="fa-solid fa-bolt"></i>
          Buy Now
        </button>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal 
          product={product}
          selectedSize={selectedSize}
          quantity={quantity}
          onClose={() => setShowPaymentModal(false)}
        />
      )}
    </div>
  );
}

// Payment Modal Component
function PaymentModal({ product, selectedSize, quantity, onClose }) {
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
    alert(`Payment initiated via ${selectedPayment}. Order placed successfully!`);
    onClose();
  };

  return (
    <div className="payment-modal-overlay" onClick={onClose}>
      <div className="payment-modal product-payment-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Complete Your Purchase</h3>
        
        <div className="order-summary">
          <div className="order-item">
            <img src={product.images[0]} alt={product.name} />
            <div className="item-details">
              <h4>{product.name}</h4>
              <p>Size: {selectedSize}</p>
              <p>Quantity: {quantity}</p>
              <div className="item-price">
                <span className="current-price">{product.price}</span>
                <span className="original-price">{product.originalPrice}</span>
              </div>
            </div>
          </div>
          
          <div className="order-total">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>{product.price}</span>
            </div>
            <div className="total-row">
              <span>Delivery:</span>
              <span>Free</span>
            </div>
            <div className="total-row final-total">
              <span>Total:</span>
              <span>{product.price}</span>
            </div>
          </div>
        </div>

        <div className="payment-options">
          <h4>Select Payment Method</h4>
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className={`payment-option ${selectedPayment === option.name ? 'selected' : ''}`}
              onClick={() => setSelectedPayment(option.name)}
            >
              <img src={option.logo} alt={option.name} />
              <span>{option.name}</span>
              <div className="radio-btn">
                {selectedPayment === option.name && <div className="selected-dot"></div>}
              </div>
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

export default ProductPage;
