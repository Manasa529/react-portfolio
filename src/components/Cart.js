import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: Number(quantity) } });
  };

  return (
    <div>
      <h2>🛒 Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>
              {item.name} - ₹{item.price} x 
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, e.target.value)}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
