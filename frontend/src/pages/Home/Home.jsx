import React from 'react';
import { makeStyles } from '@material-ui/core';
import FoodMenu from '../../components/Header/FoodMenu';
import Header from '../../components/Header/Header';

const Home = () => {
  const { } = useStyles();

  return (
    <>
      <Header />
      <FoodMenu />
    </>
  );
};

const useStyles = makeStyles({})

export default Home;
