import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './features/Home';
import BackToTop from './components/common/BackToTop';
import { initAllAnimations } from './utils/animations';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Disable Lenis smooth scroll - use normal browser scroll
    // initAllAnimations();
  }, []);

  const handleHamburgerClick = () => {
    console.log('Hamburger clicked!'); // Debug log
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    console.log('Sidebar closing!'); // Debug log
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Header onHamburgerClick={handleHamburgerClick} />
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <main className="main-content">
        <Home />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
