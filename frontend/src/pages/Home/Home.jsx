import React from 'react';
import { makeStyles } from '@material-ui/core';
import FoodMenu from '../../components/FoodMenu/FoodMenu';
import Header from '../../components/Header/Header';
import CartProvider from '../../data/CartProvider';

const Home = () => {
  const { } = useStyles();

  return (
    <CartProvider>
      <Header />
      <FoodMenu />
    </CartProvider>
  );
};

const useStyles = makeStyles({})

export default Home;
