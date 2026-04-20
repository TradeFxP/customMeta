import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const ReturnPolicy = () => {
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
          <h1 className="privacy-hero-title">Return Policy</h1>
          <p className="privacy-hero-sub">Last updated: April 3, 2026</p>
        </div>
      </div>

      <div className="container privacy-body">

        <section className="privacy-section">
          <p>
            We offer refund / exchange within the first <strong>5 days</strong> from the date of your
            purchase. If <strong>5 days</strong> have passed since your purchase, you will not be offered a
            return, exchange or refund of any kind.
          </p>
          <p>In order to become eligible for a return or an exchange:</p>
          <ul>
            <li>The purchased item should be unused and in the same condition as you received it.</li>
            <li>The item must have original packaging.</li>
            <li>
              If the item that you purchased on a sale, then the item may not be eligible for a return /
              exchange.
            </li>
          </ul>
          <p>
            Further, only such items are replaced by us (based on an exchange request), if such items are
            found defective or damaged.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Exemptions</h2>
          <p>
            You agree that there may be a certain category of products / items that are exempted from
            returns or refunds. Such categories of the products would be identified to you at the time of
            purchase.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Return Process</h2>
          <p>
            For exchange / return accepted requests (as applicable), once your returned product / item is
            received and inspected by us, we will send you an email to notify you about receipt of the
            returned / exchanged product. If the same has been approved after the quality check at our end,
            your request (i.e. return / exchange) will be processed in accordance with our policies.
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

export default ReturnPolicy;
