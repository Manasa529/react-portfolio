import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 700 },
  { id: 2, name: 'Headphones', price: 100 },
  { id: 3, name: 'Mouse', price: 50 }
];

function ProductList() {
  const { dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
