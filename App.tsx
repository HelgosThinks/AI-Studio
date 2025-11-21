import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import BundleGeneric from './pages/BundleGeneric';
import Bundle3Landing from './pages/Bundle3Landing';
import About from './pages/About';
import Contact from './pages/Contact';

// Helper to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = window.location;
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            
            {/* Special Route for Bundle 3 */}
            <Route path="/bundle/lifecycle-compliance" element={<Bundle3Landing />} />
            
            {/* Generic Route for other Bundles */}
            <Route path="/bundle/:id" element={<BundleGeneric />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;