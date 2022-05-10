import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';
import CartContext from '../../data/cart-context.js';
import { useContext } from 'react';

const Item = ({id, name, description, price, image}) => {
  const { containerItem } = useStyles();

  const cartCtx = useContext(CartContext)

  const formattedPrice = `R$${price.toFixed(2)}`.replace(".", ",");

  const addIemHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: 1,
    });
    console.log(cartCtx)
  }

  return (
    <div id={id} className={containerItem}>
      <div>
        <img alt={name} src={`https://drive.google.com/thumbnail?id=${image}`}/>
      </div>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{formattedPrice}</div>
      </div>
      <div>
        <Button onClick={addIemHandler}>escolher</Button>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  containerItem: {
    
  },
});

export default Item;