import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import { primary, gray200 } from '../../Utils/colors';
import Header from '../../components/Header/Header';

const Home = () => {
  const { container, containerHome, title, subtitle, button } = useStyles();
  const navigate = useNavigate();
  
  return (
    //<CartProvider>
    <div className={container}>
      <Header homeConfig={true} cartDisabled={true} />
      <div className={containerHome}>
        <img alt="Logo da pizzaria" src="iconepizzaria.png" height="256" width="256" />
        <div>
          <div className={title}>Pizzaria</div>
          <div className={subtitle}>Bora matar a fome juntos?</div>
          <Button className={button} variant="contained" onClick={() => navigate('/menu')}>Ver cardápio</Button>
        </div>
      </div>
    </div>
    //</CartProvider>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
  },
  containerHome: {
    flexGrow: 1,
    flexBasis: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: 40,
    paddingLeft: 128,
    backgroundColor: primary,
    color: gray200,
  },
  title: {
    fontSize: 56,
  },
  subtitle: {
    fontSize: 24,
  },
  button: {
    backgroundColor: `${gray200} !important`,
    padding: '8px 16px',
    borderRadius: 8,
    marginTop: 24,
  }
})

export default Home;
