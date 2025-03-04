import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to={`/brand/${product.brandId}`} className="btn btn-outline-primary mb-4">
        <ArrowLeft className="me-2" />
        Back to Brand
      </Link>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="position-relative">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="carousel-item"> 
                  <img
                    src={product.image2}
                    alt={product.name}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.image3}
                    alt={product.name}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={product.image4}
                    alt={product.name}
                    className="img-fluid rounded-3 shadow"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <h1 className="display-6 fw-bold mb-3">{product.name}</h1>
          
          <div className="mb-4">
            <span className="h3 text-primary"> € {product.price}</span>
            <span className="ms-2 badge bg-success">In Stock</span>
          </div>
          
          <p className="lead mb-4">{product.description}</p>
          
          <div className="mb-4">
            <h4 className="mb-3">Key Features</h4>
            <ul className="list-unstyled product-features">
              <li className="d-flex align-items-center py-2">
                <Check size={20} className="text-success me-2" />
                <span>UV Protection</span>
              </li>
              <li className="d-flex align-items-center py-2">
                <Check size={20} className="text-success me-2" />
                <span>Scratch Resistant</span>
              </li>
              <li className="d-flex align-items-center py-2">
                <Check size={20} className="text-success me-2" />
                <span>Lightweight Frame</span>
              </li>
              <li className="d-flex align-items-center py-2">
                <Check size={20} className="text-success me-2" />
                <span>Premium Quality Materials</span>
              </li>
            </ul>
          </div>
          
          <div className="d-grid gap-2">
            <Link 
              to={`/contact?name=${encodeURIComponent(JSON.stringify(product.name))}&description=${encodeURIComponent(JSON.stringify(product.description))}`} 
              className="text-light"
            > 
              <button className="btn btn-primary btn-lg w-100">
                <ShoppingCart className="me-2" />
                Request Quote
              </button>
            </Link> 
          </div>
          
          <div className="mt-4">
            <h4 className="mb-3">Product Details</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row" className="w-25 bg-light">Brand</th>
                    <td>{product.brandId.replace('-', ' ').toUpperCase()}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="w-25 bg-light">Available Colors</th>
                    <td>{product.allcolor}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light">Style</th>
                    <td>{product.gender}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light">Material</th>
                    <td>Premium Acetate & High-Quality Materials</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light">Warranty</th>
                    <td>1 Year Manufacturer Warranty</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light">Lens</th>
                    <td>{product.lense}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light">Size</th>
                    <td>{product.size}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
