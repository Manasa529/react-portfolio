import React, { createContext, useReducer } from 'react';

// Step 1: Create Context
export const CartContext = createContext();

// Step 2: Define initial state
const initialState = {
  cart: []
};

// Step 3: Define reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE_ITEM':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    default:
      return state;
  }
}

// Step 4: Create Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
