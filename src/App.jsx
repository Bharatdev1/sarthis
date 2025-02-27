import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrandProducts from './components/BrandProducts';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ScrollToTop component to handle scrolling on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100); // Small delay ensures the DOM updates before scrolling
  }, [pathname]);
  
  return null;
}

function App() {
  
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand/:brandId" element={<BrandProducts />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;