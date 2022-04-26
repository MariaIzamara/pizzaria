import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const Header = ({ loginDisabled, registerDisabled }) => {
  const { container, title, buttons } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={container}>
      <div className={title}>Pizzaria</div>
      <div className={buttons}>
        <Button variant="contained" disabled={loginDisabled} onClick={() => { navigate('/login') }}>Login</Button>
        <Button variant="contained" disabled={registerDisabled} onClick={() => { navigate('/register') }}>Cadastrar</Button>
      </div>
    </div>
  );
};

Header.defaultProps = {
  loginDisabled: false,
  registerDisabled: false,
};

Header.propTypes = {
  loginDisabled: PropTypes.bool,
  registerDisabled: PropTypes.bool,
};

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridColumn: 3,
    gridTemplateColumns: '4fr 1fr',
    padding: 24,
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    marginLeft: 24,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default Header;
