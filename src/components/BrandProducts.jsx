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
      <h2 className="text-center mb-4">{brand.name} Collection</h2>
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
                // style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Frame : {product.color}</p>
                <p className="card-text">
                  <strong>Price: € {product.price}</strong>
                </p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;