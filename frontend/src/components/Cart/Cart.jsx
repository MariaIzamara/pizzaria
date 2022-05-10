import { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import CartItem from "./CartItem";
import React from "react"
import Modal from "../../UI/Modal"
import { useHttp } from "../../hooks";
import CartContext from "../../data/cart-context";
import { requestConfigOrder } from "../../Utils/requestsConfigs";

const Cart = (props) => {

  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const { loading, error, data, sendRequest } = useHttp('');

  const sendOrder = () => sendRequest(requestConfigOrder(cartCtx));

  // Dummy cartCtx, context not working currently
  // const cartCtx = {
  //   items: [
  //     {
  //       key: "1",
  //       name: "batata",
  //       amount: "1",
  //       price: 5
  //     }
  //   ],
  //   totalAmount: 5,
  //   addItem: (item) => { },
  //   removeItem: (id) => { },
  //   clearCart: () => { }
  // }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    cartCtx.clearCart();
    setIsCheckout(true);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul>
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
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? <h1>Pedido realizado!</h1> : <Button variant="contained" onClick={orderHandler}>Finalizar</Button>}
    </Modal>
    );
}

export default Cart