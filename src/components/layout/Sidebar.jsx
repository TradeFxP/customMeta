import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    console.log('Sidebar isOpen:', isOpen);
    
    // Add/remove body class to prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.classList.add('hamburger-active');
    } else {
      document.body.classList.remove('hamburger-active');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hamburger-active');
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 9998,
            cursor: 'pointer'
          }}
        ></div>
      )}
      <div className={`hamburger-area ${isOpen ? 'opened' : ''}`} data-lenis-prevent>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_top d-flex align-items-center justify-content-between">
            <div className="hamburger_logo">
              <a className="mobile_logo" href="/">
                <img src="/assets/images/logo.jpeg" alt="Logo" style={{ maxHeight: '50px', objectFit: 'contain' }} />
              </a>
            </div>
            <div className="hamburger_close">
              <button className="hamburger_close_btn" onClick={onClose}>
                <i className="fa-thin fa-times"></i>
              </button>
            </div>
          </div>
          <div className="hamburger_search">
            <form method="get" action="/">
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
              <input
                type="search"
                autoComplete="off"
                name="s"
                defaultValue=""
                placeholder="Search here"
              />
            </form>
          </div>
          <div className="hamburger_menu">
            <div className="mobile_menu"></div>
          </div>
          <div className="hamburger-infos">
            <h4 className="hamburger-title">About MetaGen Technology</h4>
            <p className="hamburger-text">
              We are a leading IT solutions company specializing in custom software development, 
              cloud solutions, and digital transformation. With cutting-edge technology and expert team, 
              we deliver innovative solutions that drive business growth.
            </p>
            <a className="button-v2" href="#contact">
              Get A Quote
              <span className="button-icon">
                <i className="fa-regular fa-arrow-up-right"></i>
                <i className="fa-regular fa-arrow-up-right"></i>
              </span>
            </a>
            <div className="contact-items-grid">
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="tel:+1234567890">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="mailto:info@metagentech.com">
                      info@metagentech.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="contact-text">
                  <div className="text">
                    <a className="link" href="https://www.metagentech.com">
                      www.metagentech.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text">
                  <div className="text">Silicon Valley, CA, USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16"
                    height="16"
                    x="0"
                    y="0"
                    viewBox="0 0 497.904 497.904"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M485.584 338.959 328.987 67.724c-35.303-61.149-124.923-60.878-160.071 0L12.318 338.959C-22.894 399.947 21.72 475.94 91.233 475.94c31.226 0 62.08-16.013 79.212-45.687l78.506-135.977 78.506 135.977c17.105 29.628 47.937 45.687 79.212 45.687 69.466 0 114.146-75.96 78.915-136.981zm-342.852 75.294c-13.822 23.942-41.921 34.781-67.794 27.341-37.155-10.795-54.038-53.502-34.908-86.636 16.384-28.379 52.612-38.092 80.998-21.704 28.381 16.386 38.092 52.615 21.704 80.999zm34.696-60.094c-14.906-42.335-58.535-67.563-102.701-59.294L163.14 141.73c3.939 12.044 1.172 5.946 67.337 120.547zm258.74 81.798c-28.377 16.386-64.611 6.68-80.998-21.704L198.573 143.018c-29.882-51.757 27.723-110.637 79.054-80.998 19.208 11.09 13.923 4.861 180.245 292.938 16.347 28.315 6.611 64.651-21.704 80.999z"
                        fill="currentColor"
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
