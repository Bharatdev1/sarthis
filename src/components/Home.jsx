import React from 'react';
import { useNavigate } from 'react-router-dom';
import { brands } from '../data/brands';
import { Glasses } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section text-center position-relative">
        <div className="container hero-content">
          <h1 className="display-4 fw-bold mb-3">Welcome to Sarthi's</h1>
          <p className="lead mb-4">Discover Premium Eyewear from Top Brands</p>
          <div className="d-inline-block p-2 bg-white rounded-circle mb-4">
            <Glasses size={40} className="text-primary" />
          </div>
          <p className="mb-4">Elevate your style with our exclusive collection of designer frames</p>
          <button 
            className="btn btn-primary btn-lg px-4 py-2"
            onClick={() => {
              const brandsSection = document.getElementById('brands-section');
              brandsSection.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Brands
          </button>
        </div>
        <div className="glasses-shape"></div>
      </section>

      <section className="py-5 bg-light" id="brands-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Premium Brands</h2>
            <div className="section-divider mx-auto"></div>
            <p className="lead text-muted">Curated selection of the world's finest eyewear</p>
          </div>
          
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {brands.map((brand) => (
              <div key={brand.id} className="col">
                <div
                  className="brand-card"
                  onClick={() => navigate(`/brand/${brand.id}`)}
                >
                  <div className="brand-logo">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="img-fluid mb-3"
                    />
                  </div>
                  <h5 className="card-title mt-2">{brand.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&h=400" 
                alt="Premium Eyewear" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Why Choose Sarthi's?</h2>
              <div className="section-divider mb-4"></div>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-primary rounded-circle p-2 me-3 text-white">✓</span>
                  <span>Authentic Designer Brands</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-primary rounded-circle p-2 me-3 text-white">✓</span>
                  <span>Premium Quality Materials</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-primary rounded-circle p-2 me-3 text-white">✓</span>
                  <span>Expert Style Consultation</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="bg-primary rounded-circle p-2 me-3 text-white">✓</span>
                  <span>Comprehensive Warranty</span>
                </li>
              </ul>
              <button 
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
