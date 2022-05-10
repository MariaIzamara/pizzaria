import { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import CartItem from "./CartItem";
import React from "react"
import Modal from "../../UI/Modal"
import { useHttp } from "../../hooks";
import CartContext from "../../data/cart-context";
import { requestConfigOrder } from "../../Utils/requestsConfigs";

const Cart = (props) => {

  const [isCheckout, setIsCheckout] = useState("false");
  const cartCtx = useContext(CartContext);
  const { loading, error, data, sendRequest } = useHttp('');

  const sendOrder = () => sendRequest(requestConfigOrder(cartCtx));

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    item.id<=13 ? cartCtx.addItem({...item, amount: 0.5}) : cartCtx.addItem({...item, amount: 1});
  };

  const orderHandler = () => {
    let totalItems = 0;
    let item = {};
    for (item in cartCtx.items) {
      totalItems += cartCtx.items[item].amount;
    }
    if(totalItems % 1 === 0)
    {
      sendOrder();
      cartCtx.clearCart();
      setIsCheckout("true");
    }
    else 
    {
      setIsCheckout("Error");
    }
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
      {isCheckout === "True" ? <h1>Pedido realizado!</h1> 
      : isCheckout === "Error" ?
        <>
          <h1>Não é permitida a compra de meia pizza avulsa</h1>
          <Button variant="contained" onClick={orderHandler}>Finalizar</Button>
        </> :
          <Button variant="contained" onClick={orderHandler}>Finalizar</Button>}
    </Modal>
    );
}

export default Cart