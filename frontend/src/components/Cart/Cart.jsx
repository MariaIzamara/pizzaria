import { useState, useContext } from "react";
import { Button, makeStyles } from "@material-ui/core";
import CartItem from "./CartItem";
import React from "react"
import Modal from "../../UI/Modal"
import { useHttp } from "../../hooks";
import CartContext from "../../data/cart-context";
import { requestConfigOrder } from "../../Utils/requestsConfigs";

const Cart = (props) => {
  const { containerCart, containerCartItems, finish } = useStyles();

  const cartCtx = useContext(CartContext);

  const [isCheckout, setIsCheckout] = useState(false);
  
  const { loading, error, data, sendRequest } = useHttp('');

  const sendOrder = () => sendRequest(requestConfigOrder(cartCtx));

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    sendOrder();
    cartCtx.clearCart();
    setIsCheckout(true);
  };

  const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`.replace(".", ",");

  const cartItems = (
    <div className={containerCartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </div>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      <div className={containerCart}>
        {cartItems}
        <div className={finish}>
          <div>{`Total ${totalAmount}`}</div>
          {isCheckout ? <h1>Pedido realizado!</h1> : <Button variant="contained" onClick={orderHandler}>Finalizar</Button>}
        </div>
      </div>
    </Modal>
    );
};

const useStyles = makeStyles({
  containerCart: {
    padding: 32,
  },
  finish: {
    
  }
  // title: {
  //   fontSize: 24,
  // },
  // buttons: {
  //   display: 'flex',
  //   gap: 8,
  // },
  // buttonRemove: {
  //   border: 'none',
  //   borderRadius: 4,
  //   padding: '2px 8px',
  //   color: 'white',
  //   backgroundColor: primary,
  // },
  // buttonAdd: {
  //   border: 'none',
  //   borderRadius: 4,
  //   padding: '2px 8px',
  //   color: 'white',
  //   backgroundColor: primary,
  // },
});

export default Cart