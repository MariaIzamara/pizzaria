import React from 'react';
import { Button } from '@material-ui/core';
import CartContext from '../../data/cart-context.js';
import { useContext } from 'react';

const Item = (props) => {

  const cartCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`;

  const addIemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price
    });
  }

  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <Button>Temp</Button>
      </div>
    </div>
  );
};

export default Item;