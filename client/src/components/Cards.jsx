import React from 'react';
import './cards.css'; // Importing CSS for styling
import { Link } from 'react-router-dom';
import { useCart } from '../store/Cart';

const Cards = ({ product}) => {
  const {cart,setCart}=useCart();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={() => {
          setCart([...cart,product]);
          localStorage.setItem("mycart",JSON.stringify([...cart,product]))
          }}>
          Add to Cart
        </button>
      </div>
      <Link to={`/products/${product._id}`}>View Product</Link>
    </div>
  );
};

export default Cards;
