import { useReducer } from 'react';

import CartContext from './cart-context.js';

const defaultCartState = {
  token: "",
  addressId: 1,
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'TOKEN') {
    return ({ ...state, token: action.token })
  }

  if (action.type === 'ADDRESS') {
    return ({ ...state, addressId: action.id })
  }

  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * 1;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      token: state.token,
      addressId: state.addressId,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      token: state.token,
      addressId: state.addressId,
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'CLEAR') {
    return {
      ...defaultCartState,
       token: state.token,
      addressId: state.addressId,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addAddressToCartHandler = (id) => {
    dispatchCartAction({type: 'ADDRESS', id: id});
  }

  const addTokenToCartHandler = (token) => {
    dispatchCartAction({ type: 'TOKEN', token: token });
  };

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartCtx = {
    token: cartState.token,
    items: cartState.items,
    addressId: cartState.addressId,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    addToken: addTokenToCartHandler,
    addAddress: addAddressToCartHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;