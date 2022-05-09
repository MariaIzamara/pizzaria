import React from 'react';

const CartContext = React.createContext({
  token: "",
  addressId: 0,
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  addAddress: (id) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  addToken: (token) => {}
});

export default CartContext;