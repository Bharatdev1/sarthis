import React from 'react';
import { useNavigate } from 'react-router-dom';
import { brands } from '../data/brands';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Sarthi's</h1>
          <p className="lead">Discover Premium Eyewear from Top Brands</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Premium Brands</h2>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {brands.map((brand) => (
              <div key={brand.id} className="col">
                <div
                  className="card h-100 brand-logo"
                  onClick={() => navigate(`/brand/${brand.id}`)}
                >
                  <div className="card-body text-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="img-fluid mb-3"
                      style={{ maxHeight: '60px' }}
                    />
                    <h5 className="card-title">{brand.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;