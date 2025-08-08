# Meesho Clone - Mobile Responsive E-commerce Website

A fully responsive Meesho clone built with React, featuring mobile-first design and integrated UPI payment system.

## ✨ Features

### 🎯 Core Features
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Mobile-First Approach** - Designed primarily for mobile users
- **UPI Payment Integration** - PhonePe, Paytm, and Google Pay support
- **Product Catalog** - 20+ products with ratings and reviews
- **Modern UI/UX** - Clean, intuitive interface matching Meesho's design

### 📱 Mobile Features
- **Hamburger Navigation** - Collapsible mobile menu
- **Touch-Optimized** - Large buttons and touch-friendly interface
- **Responsive Grid** - 2-column product grid on mobile, 5-column on desktop
- **Mobile Payment Modal** - Full-screen payment experience on mobile

### 💳 Payment System
- **UPI Integration** - Support for major UPI apps
- **Payment Modal** - Secure payment interface
- **Multiple Payment Options**:
  - PhonePe
  - Paytm  
  - Google Pay
- **Order Summary** - Product details before payment

### 🛍️ Product Features
- **Buy Now Functionality** - Direct purchase from product cards
- **Product Details** - Name, price, rating, reviews
- **Free Delivery** - Highlighted for all products
- **Star Ratings** - Visual rating system
- **Responsive Images** - Optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd meesho-clone-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (2-column product grid)
- **Tablet**: 769px - 1024px (3-column product grid)
- **Desktop**: > 1024px (5-column product grid)

## 🎨 Design Features

### Mobile Navigation
- Hamburger menu with smooth slide-in animation
- Category navigation
- User profile and cart access
- Search functionality

### Product Grid
- CSS Grid layout for optimal responsiveness
- Hover effects on desktop
- Touch-friendly on mobile
- Consistent spacing across devices

### Payment Interface
- Modal-based payment system
- UPI app icons with SVG graphics
- Payment method selection
- Order confirmation

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1
- **Styling**: CSS3 with Flexbox and Grid
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins)
- **Build Tool**: Vite 7.1.0
- **CSS Framework**: TailwindCSS 4.1.11

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Responsive navigation
│   ├── Banner.jsx          # Hero banner
│   ├── Policy.jsx          # Policy section
│   ├── Collection.jsx      # Category collection
│   ├── Gold.jsx            # Gold section
│   ├── BrandSection.jsx    # Brand showcase
│   ├── Trendz.jsx          # Trending section
│   ├── Products.jsx        # Product grid with payment
│   └── Footer.jsx          # Footer section
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles with responsive design

public/
└── assets/
    ├── phonepe.svg        # PhonePe payment icon
    ├── paytm.svg          # Paytm payment icon
    ├── googlepay.svg      # Google Pay payment icon
    └── [product-images]   # Product catalog images
```

## 🔧 Customization

### Adding New Products
Edit the `productList` array in `src/components/Products.jsx`:

```javascript
{
  img: "/assets/your-image.webp",
  name: "Product Name",
  price: "₹ 999",
  rating: "4.5",
  reviews: "1234",
}
```

### Modifying Payment Options
Update the `paymentOptions` array in the PaymentModal component:

```javascript
{
  id: 'newpayment',
  name: 'New Payment',
  logo: '/assets/newpayment.svg'
}
```

### Responsive Breakpoints
Modify breakpoints in `src/index.css`:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 1024px) and (min-width: 769px) {
  /* Tablet styles */
}
```

## 🎯 Key Features Implemented

✅ **Mobile Responsive Design**
✅ **UPI Payment System**
✅ **Product Buy Functionality**
✅ **Mobile Navigation Menu**
✅ **Payment Modal Interface**
✅ **Responsive Product Grid**
✅ **Touch-Optimized UI**
✅ **Modern CSS Grid Layout**

## 📝 Notes

- This is a demo application - no actual payments are processed
- Payment integration shows modal interface only
- All product data is static for demonstration
- Images are optimized for web performance
- Mobile-first responsive design approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is for educational purposes and demonstration of responsive web development skills.

---

**Built with ❤️ using React and modern web technologies**