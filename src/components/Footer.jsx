import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Sarthi's</h5>
            <p>Your premier destination for Sarthi's eyewear.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 Sarthi's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;