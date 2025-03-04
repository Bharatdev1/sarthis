import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Glasses } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <Glasses size={24} className="me-2" />
              <h5 className="mb-0">Sarthi's</h5>
            </div>
            <p>Your premier destination for premium eyewear.</p>
            <p className="mb-0">
              <small>CC Parque Santiago, 3, Local Nº 172, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain</small>
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li className="mb-2"><a href="#brands-section" className="text-light text-decoration-none">Brands</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-light">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-light">
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-3">
              <p className="mb-1"><small>Email: sdselectronics@hotmail.com</small></p>
              <p className="mb-0"><small>Phone: +34 613668562</small></p>
            </div>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Sarthi's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
