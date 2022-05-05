import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import FoodMenu from '../../components/FoodMenu/FoodMenu';
import Header from '../../components/Header/Header';
import CartProvider from '../../data/CartProvider';
import Cart from '../../components/Cart/Cart';

const Home = () => {
  const { } = useStyles();
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  console.log(showCart)

  return (
    //<CartProvider>
    <>
      {showCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <FoodMenu />
    </>
    //</CartProvider>
  );
};

const useStyles = makeStyles({})

export default Home;
