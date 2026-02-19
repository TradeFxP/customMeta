import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="cta-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              {/* Animated Background Elements */}
              <div className="cta-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="cta-content">
                    <span className="cta-sub-title">
                      <i className="fa-solid fa-rocket"></i>
                      Ready to Get Started?
                    </span>
                    <h2 className="cta-title">
                      Let's Build Something <span className="text-gradient">Amazing Together</span>
                    </h2>
                    <p className="cta-description">
                      Transform your ideas into reality with our expert team. Get a free consultation 
                      and discover how we can help your business grow.
                    </p>
                    
                    <div className="cta-features">
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Free Consultation</span>
                      </div>
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>No Hidden Costs</span>
                      </div>
                      <div className="cta-feature-item">
                        <i className="fa-solid fa-check-circle"></i>
                        <span>Quick Response Time</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="cta-actions">
                    <a href="#contact" className="button-v2 cta-primary-btn">
                      Start Your Project
                      <span className="button-icon">
                        <i className="fa-regular fa-arrow-up-right"></i>
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </span>
                    </a>
                    
                    <a href="tel:+1234567890" className="cta-contact-link">
                      <div className="contact-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">Call Us Now</span>
                        <span className="contact-value">+1 (234) 567-890</span>
                      </div>
                    </a>

                    <a href="mailto:info@itcompany.com" className="cta-contact-link">
                      <div className="contact-icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">Email Us</span>
                        <span className="contact-value">info@itcompany.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="cta-stats">
                <div className="row g-4">
                  <div className="col-6 col-lg-3">
                    <div className="stat-box">
                      <i className="fa-solid fa-users"></i>
                      <div className="stat-content">
                        <h4>250+</h4>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="stat-box">
                      <i className="fa-solid fa-project-diagram"></i>
                      <div className="stat-content">
                        <h4>500+</h4>
                        <p>Projects Done</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="stat-box">
                      <i className="fa-solid fa-award"></i>
                      <div className="stat-content">
                        <h4>25+</h4>
                        <p>Awards Won</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="stat-box">
                      <i className="fa-solid fa-clock"></i>
                      <div className="stat-content">
                        <h4>24/7</h4>
                        <p>Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
