import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button } from '@material-ui/core';
import CartContext from '../../data/cart-context.js';
import { useContext } from 'react';
import { gray200, primary } from '../../Utils/colors.js';

const Item = ({id, name, description, price, image}) => {
  const { containerItem, picture, button1, pricestyle } = useStyles();

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
        <img className={picture} alt={name} src={`https://drive.google.com/thumbnail?id=${image}`}/>
      </div>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div className={pricestyle}>{formattedPrice}</div>
      </div>
      <div>
        <Button className={button1} onClick={addIemHandler}>escolher</Button>
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
    textAlign: "center",
    padding: "10px",
    border: `solid 1px ${primary}`,
    width: 'min(1rem,50,10vw)',
    maxWidth: '500px',
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 16,
  },
  picture:{
     border: `solid 1px ${primary}`,
     padding: 1,
     opacity: 0.8,
  },
  button1:{
    display: "inline",
    border: `solid 1px ${primary}`,
    '&:hover': {
      backgroundColor: primary,
      boxShadow: '0 4px 1em gray',
      color: '#FFFFFF',
    }
  },
  pricestyle:{
    color: `${gray200}`,
    fontSize: 48, 
    textShadow: `#000000 1px 1px 1px`,
    marginBottom: 5,
  }
});

export default Item;