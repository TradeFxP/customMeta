// Import all JavaScript libraries
import $ from 'jquery';
import 'jquery.marquee';
import Swiper from 'swiper/bundle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Make jQuery available globally
window.$ = window.jQuery = $;
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
window.Swiper = Swiper;
window.SplitType = SplitType;

// Initialize Lenis Smooth Scroll
export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
};

// Counter Animation
export const initCounter = () => {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target') || +counter.innerText;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    // Trigger on scroll into view
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => updateCounter(),
      once: true,
    });
  });
};

// Marquee Animation
export const initMarquee = () => {
  if (typeof $.fn.marquee !== 'undefined') {
    $('.marquee').marquee({
      duration: 20000,
      gap: 0,
      delayBeforeStart: 0,
      direction: 'left',
      duplicated: true,
    });
  }
};

// Back to Top Button
export const initBackToTop = () => {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: false },
        ease: 'power2.inOut',
      });
    });
  }
};

// Swiper Initialization
export const initSwiper = (selector, options = {}) => {
  const defaultOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const mergedOptions = { ...defaultOptions, ...options };
  
  if (document.querySelector(selector)) {
    return new Swiper(selector, mergedOptions);
  }
  return null;
};

// Text Split Animation
export const initTextSplitAnimation = () => {
  const animatedTexts = document.querySelectorAll('[data-animation="text-split"]');
  
  animatedTexts.forEach((text) => {
    const split = new SplitType(text, { types: 'words, chars' });
    
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
};

// Fade In Animation on Scroll
export const initFadeInAnimation = () => {
  const fadeElements = document.querySelectorAll('[data-animation="fade-in"]');
  
  fadeElements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
};

// Scale In Animation
export const initScaleAnimation = () => {
  const scaleElements = document.querySelectorAll('[data-animation="scale-in"]');
  
  scaleElements.forEach((element) => {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  // Initialize Lenis smooth scroll
  const lenis = initLenis();

  // Initialize counter animations
  initCounter();

  // Initialize marquee
  initMarquee();

  // Initialize back to top button
  initBackToTop();

  // Initialize text animations
  initTextSplitAnimation();
  initFadeInAnimation();
  initScaleAnimation();

  console.log('✅ All animations initialized!');
  
  return { lenis };
};

export default {
  initLenis,
  initCounter,
  initMarquee,
  initBackToTop,
  initSwiper,
  initTextSplitAnimation,
  initFadeInAnimation,
  initScaleAnimation,
  initAllAnimations,
};
