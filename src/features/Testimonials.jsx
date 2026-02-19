import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO, TechCorp',
      company: 'TechCorp Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'Exceptional service! They transformed our outdated system into a modern, scalable solution. The team was professional, responsive, and delivered ahead of schedule.',
      project: 'Enterprise Software Development'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Product Manager, StartupXYZ',
      company: 'StartupXYZ',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Outstanding work on our mobile app! The attention to detail and user experience was phenomenal. Highly recommend for any mobile development project.',
      project: 'Mobile App Development'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'CTO, CloudServices',
      company: 'CloudServices Ltd.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      text: 'Their cloud migration expertise saved us thousands in operational costs. The infrastructure they built is rock-solid and scales beautifully.',
      project: 'Cloud Infrastructure Setup'
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'Founder, E-Shop',
      company: 'E-Shop Online',
      image: 'https://randomuser.me/api/portraits/women/67.jpg',
      rating: 5,
      text: 'They built our entire e-commerce platform from scratch. The result exceeded our expectations, and our sales have tripled since launch!',
      project: 'E-Commerce Platform'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="testimonials-section section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <span className="section-sub-title">
                <i className="fa-solid fa-asterisk"></i>
                Client Testimonials
                <i className="fa-solid fa-asterisk"></i>
              </span>
              <h2 className="section-title">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="section-description">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="testimonial-card">
              {/* Quote Icon */}
              <div className="quote-icon">
                <i className="fa-solid fa-quote-left"></i>
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="testimonial-text">"{currentTestimonial.text}"</p>

              {/* Project Info */}
              <div className="testimonial-project">
                <i className="fa-solid fa-briefcase"></i>
                <span>{currentTestimonial.project}</span>
              </div>

              {/* Author Info */}
              <div className="testimonial-author">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h5 className="author-name">{currentTestimonial.name}</h5>
                  <p className="author-position">
                    {currentTestimonial.position}
                    <span className="author-company"> • {currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="testimonial-nav">
                <button className="nav-btn prev" onClick={prevTestimonial}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <div className="nav-dots">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                    ></span>
                  ))}
                </div>
                <button className="nav-btn next" onClick={nextTestimonial}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="client-logos">
              <h6 className="logos-title">Trusted by Leading Companies</h6>
              <div className="logos-wrapper">
                <div className="logo-item">TechCorp</div>
                <div className="logo-item">StartupXYZ</div>
                <div className="logo-item">CloudServices</div>
                <div className="logo-item">E-Shop</div>
                <div className="logo-item">InnovateLab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
