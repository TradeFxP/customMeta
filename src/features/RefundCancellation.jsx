import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const RefundCancellation = () => {
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
          <h1 className="privacy-hero-title">Refund &amp; Cancellation Policy</h1>
          <p className="privacy-hero-sub">Last updated: April 3, 2026</p>
        </div>
      </div>

      <div className="container privacy-body">

        <section className="privacy-section">
          <p>
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product
            / service that you have purchased through the Platform. Under this policy:
          </p>
          <ol>
            <li>
              Cancellations will only be considered if the request is made within <strong>5 days</strong> of
              placing the order. However, cancellation requests may not be entertained if the orders have
              been communicated to such sellers / merchant(s) listed on the Platform and they have initiated
              the process of shipping them, or the product is out for delivery. In such an event, you may
              choose to reject the product at the doorstep.
            </li>
            <li>
              <strong>Metagen Technologies</strong> does not accept cancellation requests for perishable
              items like flowers, eatables, etc. However, the refund / replacement can be made if the user
              establishes that the quality of the product delivered is not good.
            </li>
            <li>
              In case of receipt of damaged or defective items, please report to our customer service team.
              The request would be entertained once the seller / merchant listed on the Platform, has checked
              and determined the same at its own end. This should be reported within <strong>5 days</strong>{' '}
              of receipt of products. In case you feel that the product received is not as shown on the site
              or as per your expectations, you must bring it to the notice of our customer service within{' '}
              <strong>5 days</strong> of receiving the product. The customer service team after looking into
              your complaint will take an appropriate decision.
            </li>
            <li>
              In case of complaints regarding the products that come with a warranty from the manufacturers,
              please refer the issue to them.
            </li>
            <li>
              In case of any refunds approved by <strong>Metagen Technologies</strong>, it will take{' '}
              <strong>10 days</strong> for the refund to be processed to you.
            </li>
          </ol>
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
            <p>
              <i className="fa-solid fa-clock"></i> Monday – Friday, 9:00 – 18:00
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default RefundCancellation;
