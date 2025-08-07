import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        {/* Section 1: App Info */}
        <div className="section-1">
          <h2>Shop Non-Stop On Meesho</h2>
          <p>Trusted by crores of Indians</p>
          <p>Cash on delivery | Free Delivery</p>
          <div className="download">
            <img src="/assets/google play.webp" alt="Google Play" />
            <img src="/assets/app store.webp" alt="App Store" />
          </div>
        </div>

        {/* Section 2: Useful Links */}
        <div className="section-2">
          <div className="sec"><a href="#">Carrers</a></div>
          <div className="sec"><a href="#">Become a Supplier</a></div>
          <div className="sec"><a href="#">Hall of fame</a></div>
          <div className="sec"><a href="#">Sitemap</a></div>
        </div>

        {/* Section 3: Legal */}
        <div className="section-3">
          <div className="sec"><a href="#">Legal and Policies</a></div>
          <div className="sec"><a href="#">Meesho Tech Blog</a></div>
          <div className="sec"><a href="#">Notices and Returns</a></div>
        </div>

        {/* Section 4: Social Media */}
        <div className="section-4">
          <h6>Reach out to us</h6>
          <div className="social-media">
            <img src="/assets/facebook.webp" alt="Facebook" />
            <img src="/assets/instagram.webp" alt="Instagram" />
            <img src="/assets/youtube.webp" alt="YouTube" />
            <img src="/assets/linkedin.webp" alt="LinkedIn" />
          </div>
        </div>

        {/* Section 5: Contact Info */}
        <div className="section-5">
          <h6>Contact us</h6>
          <div>
            Meesho Private Limited <br />
            (Formerly known as Fashnear Technologies Private Limited) <br />
            CIN: U74900KA2015PTC082263 <br />
            3rd Floor, Wing-E, Helios Business Park, Kadubeesanahalli Village,
            Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore South,
            Karnataka, India, 560103 <br />
            E-mail address:{" "}
            <a href="mailto:query@meesho.com">query@meesho.com</a> <br />
            © 2015-2025 Meesho.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
