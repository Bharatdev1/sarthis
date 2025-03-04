import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { brands } from '../data/brands';
import { products } from '../data/products';

const BrandProducts = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const brand = brands.find(b => b.id === brandId);
  const brandProducts = products.filter(p => p.brandId === brandId);

  if (!brand) {
    return <div className="container py-5">Brand not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <div className="brand-logo d-inline-block mb-3" style={{ maxWidth: '200px' }}>
          <img
            src={brand.logo}
            alt={brand.name}
            className="img-fluid"
          />
        </div>
        <h2 className="fw-bold">{brand.name} Collection</h2>
        <div className="section-divider mx-auto"></div>
        <p className="lead text-muted">Explore our selection of premium {brand.name} eyewear</p>
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {brandProducts.map((product) => (
          <div key={product.id} className="col">
            <div 
              className="card h-100 product-card"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Frame: {product.color}</p>
                <p className="card-text">
                  <strong>Price: € {product.price}</strong>
                </p>
                <button className="btn btn-primary w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {brandProducts.length === 0 && (
        <div className="text-center py-5">
          <p className="lead">No products available for this brand at the moment.</p>
          <button 
            className="btn btn-outline-primary mt-3"
            onClick={() => navigate('/')}
          >
            Back to Brands
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
