import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <Link to="/" className="privacy-back-link">
            <i className="fa-regular fa-arrow-left"></i> Back to Home
          </Link>
          <h1 className="privacy-hero-title">Shipping Policy</h1>
          <p className="privacy-hero-sub">Last updated: April 3, 2026</p>
        </div>
      </div>

      <div className="container privacy-body">

        <section className="privacy-section">
          <p>
            The orders for the user are shipped through registered domestic courier companies and/or speed
            post only. Orders are shipped within <strong>10 days</strong> from the date of the order and/or
            payment or as per the delivery date agreed at the time of order confirmation and delivering of
            the shipment, subject to courier company / post office norms.
          </p>
          <p>
            Platform Owner shall not be liable for any delay in delivery by the courier company / postal
            authority.
          </p>
          <p>
            Delivery of all orders will be made to the address provided by the buyer at the time of
            purchase. Delivery of our services will be confirmed on your email ID as specified at the time
            of registration.
          </p>
          <p>
            If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case may
            be), the same is not refundable.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <div className="privacy-contact">
            <p><i className="fa-solid fa-building"></i> <strong>Metagen Technologies</strong></p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Lotus Heights, Kavuri Hills Phase 2 Rd, beside
              D-Mart, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{' '}
              <a href="mailto:info@metagensoft.com">info@metagensoft.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ShippingPolicy;
