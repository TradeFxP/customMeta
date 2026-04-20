import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './features/Home';
import PrivacyPolicy from './features/PrivacyPolicy';
import TermsConditions from './features/TermsConditions';
import RefundCancellation from './features/RefundCancellation';
import ReturnPolicy from './features/ReturnPolicy';
import ShippingPolicy from './features/ShippingPolicy';
import BackToTop from './components/common/BackToTop';
import { ProjectModalProvider } from './context/ProjectModalContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleHamburgerClick = () => setSidebarOpen(true);
  const handleSidebarClose   = () => setSidebarOpen(false);

  return (
    <BrowserRouter>
      <ProjectModalProvider>
        <div className="App">
          <Header onHamburgerClick={handleHamburgerClick} />
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="/refund-cancellation-policy" element={<RefundCancellation />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
            </Routes>
          </main>
          <BackToTop />
        </div>
      </ProjectModalProvider>
    </BrowserRouter>
  );
}

export default App;
