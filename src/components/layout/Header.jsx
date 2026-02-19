import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './Header.css';

const Header = ({ onHamburgerClick }) => {
  return (
    <header className="header section">
      <div className="container large-container">
        <div className="row">
          <div className="col-12">
            <div className="header__wrapper">
              <div className="header-logo">
                <a href="/">
                  <img src="/assets/images/logo.jpeg" alt="logo" style={{ maxHeight: '70px', objectFit: 'contain' }} />
                </a>
              </div>
              <div className="header__menus">
                <nav className="mobile-menu-active">
                  <ul>
                    <li>
                      <a href="#hero">HOME</a>
                    </li>
                    <li>
                      <a href="#about">ABOUT</a>
                    </li>
                    <li>
                      <a href="#services">SERVICES</a>
                    </li>
                    <li>
                      <a href="#process">PROCESS</a>
                    </li>
                    <li>
                      <a href="#pricing">PRICING</a>
                    </li>
                    <li>
                      <a href="#contact">CONTACT</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__right">
                <div className="header-social-hamburger">
                  <div className="social-share">
                    <ul>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-facebook-icon lucide-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-x-twitter"
                          >
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin-icon lucide-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="hamburger-menu" onClick={onHamburgerClick}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                      <rect
                        x="14"
                        y="3"
                        width="6.5"
                        height="6.5"
                        rx="1.5"
                        stroke="black"
                        strokeWidth="2"
                        transform="rotate(45 17 7)"
                      ></rect>
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="2"
                        stroke="black"
                        strokeWidth="2"
                      ></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
