import React, { useState } from 'react';

const Pricing = () => {
  const [activeAccordion, setActiveAccordion] = useState(3);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      number: "01",
      question: "What technologies do you work with?",
      answer: "We specialize in modern technologies including React, Node.js, Python, Java, .NET, AWS, Azure, Google Cloud, mobile development (iOS/Android), AI/ML, and blockchain solutions.",
      expanded: false
    },
    {
      id: 2,
      number: "02",
      question: "How long does software development take?",
      answer: "Project timelines vary based on complexity. Simple applications take 2-3 months, medium projects 4-6 months, and enterprise solutions 6-12 months. We provide detailed timeline estimates after requirements analysis.",
      expanded: false
    },
    {
      id: 3,
      number: "03",
      question: "Do you provide maintenance and support?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support for all our software solutions.",
      expanded: true
    },
    {
      id: 4,
      number: "04",
      question: "Can I scale my plan as my business grows?",
      answer: "Absolutely! Our flexible architecture allows seamless scaling. You can upgrade your plan anytime to add more features, increase capacity, or expand to new platforms without disrupting your operations.",
      expanded: false
    }
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Starter Package",
      description: "Perfect for startups and small businesses launching their first digital product or web application.",
      price: "499",
      discount: "Save 25%",
      features: [
        { text: "Custom Web Application", enabled: true },
        { text: "Responsive Design", enabled: true },
        { text: "Basic API Integration", enabled: false }
      ],
      active: true
    },
    {
      id: 2,
      name: "Professional Package",
      description: "Comprehensive solution for growing companies needing advanced features and scalable architecture.",
      price: "999",
      discount: "Save 30%",
      features: [
        { text: "Full-Stack Development", enabled: true },
        { text: "Cloud Deployment (AWS/Azure)", enabled: true },
        { text: "Advanced Security Features", enabled: false }
      ],
      active: false
    },
    {
      id: 3,
      name: "Enterprise Package",
      description: "Complete enterprise-grade solutions with dedicated team, custom architecture, and premium support.",
      price: "2499",
      discount: "Save 35%",
      features: [
        { text: "Custom System Architecture", enabled: true },
        { text: "AI/ML Integration", enabled: true },
        { text: "24/7 DevOps Support", enabled: true }
      ],
      active: false
    }
  ];

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100" fill="none">
      <path fill="currentColor" d="M92.275 10.976c-17.47 5.735-39.743 21.072-60.28 47.344L19.857 44.85c-1.867-2.133-5.334-2.133-7.202 0L3.721 54.854c-1.734 2-1.6 4.934.267 6.668L31.46 87.927c2.267 2.134 6.001 1.6 7.602-1.2 14.67-26.54 30.407-46.277 57.08-68.95 3.2-2.8.266-8.135-3.868-6.8z"></path>
    </svg>
  );

  return (
    <section id="pricing" className="pricing-two section section-padding-top">
      <div className="container medium-container">
        <div className="row g-4 gx-xxl-5">
          {/* Left Column - FAQs */}
          <div className="col-xl-6 fade-anim" data-direction="left">
            <div className="section-header">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                Our Pricing Plans
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title text-anim">
                Flexible Pricing Plans For Your Business
              </h2>
            </div>
            <div className="pricing-two__accordion accordion row-margin-top" id="pricingTwoAccordion">
              {faqs.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                  <span className="item-number">{faq.number}</span>
                  <h3 className="accordion-header">
                    <button 
                      className={`accordion-button ${activeAccordion !== faq.id ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={activeAccordion === faq.id}
                      aria-controls={`collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div 
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse ${activeAccordion === faq.id ? 'show' : ''}`}
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Pricing Plans */}
          <div className="col-xl-6 fade-anim" data-direction="right">
            <div className="pricing-two__list">
              {pricingPlans.map((plan) => (
                <div 
                  className={`pricing-two__item ${plan.id === 1 && hoveredCard === null ? 'active' : ''} ${hoveredCard === plan.id ? 'active' : ''}`}
                  key={plan.id}
                  onMouseEnter={() => setHoveredCard(plan.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span className="pricing-item-bg background-image" style={{ backgroundImage: 'url("assets/images/pricing/pricing-item-bg-2.png")' }}></span>
                  <div className="item-top">
                    <div className="item-info">
                      <h4 className="plan-name">{plan.name}</h4>
                      <p className="plan-desc">{plan.description}</p>
                    </div>
                    <div className="item-price">
                      <div className="badge-discount">{plan.discount}</div>
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">/ Month</span>
                    </div>
                  </div>
                  <div className="item-details">
                    <div className="item-details-wrapper">
                      <ul className="feature-list">
                        {plan.features.map((feature, index) => (
                          <li key={index} className={!feature.enabled ? 'disabled' : ''}>
                            <CheckIcon />
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                      <a className="button-v2" href="/contact">
                        Purchase Now
                        <span className="button-icon">
                          <i className="fa-regular fa-arrow-up-right"></i>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
