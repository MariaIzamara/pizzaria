import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import { primary, gray200 } from '../../Utils/colors';

const Header = ({ homeConfig, loginDisabled, registerDisabled, cartDisabled, onShowCart }) => {
  const { containerHeader, logo, title, buttons, button } = useStyles();
  const { token } = useParams();
  const navigate = useNavigate();

  return (
    <div className={containerHeader}>
      {homeConfig ?
        <div></div>
        :
        <div className={logo} onClick={() => { navigate('/') }}>
          <img alt="Logo da pizzaria" src="iconepizzaria.png" height="32" width="32" />
          <div className={title}>Pizzaria</div>
        </div>
      }

      {token ?
        <div className={buttons}>
          <Button className={button} variant="contained" disabled={cartDisabled} onClick={onShowCart}>Carrinho</Button>
          <Button className={button} variant="contained" onClick={() => { navigate('/') }}>Sair</Button>
        </div>
        :
        <>
          <div className={buttons}>
            <Button className={button} variant="contained" disabled={loginDisabled} onClick={() => { navigate('/login') }}>Login</Button>
            <Button className={button} variant="contained" disabled={registerDisabled} onClick={() => { navigate('/register') }}>Cadastrar</Button>
          </div>
        </>
      }
    </div>
  );
};

Header.defaultProps = {
  loginDisabled: false,
  registerDisabled: false,
  cartDisabled: false,
  homeConfig: false,
  onShowCart: () => {},
};

Header.propTypes = {
  loginDisabled: PropTypes.bool,
  registerDisabled: PropTypes.bool,
  cartDisabled: PropTypes.bool,
  homeConfig: PropTypes.bool,
  onShowCart: PropTypes.func,
};

const useStyles = makeStyles({
  containerHeader: {
    flexGrow: 0,
    flexBasis: 'auto',
    display: 'grid',
    gridColumn: 3,
    gridTemplateColumns: '4fr 1fr',
    padding: 24,
    backgroundColor: primary,
    color: gray200,
    boxShadow: '0 6px 1em gray',
    fontWeight: 500,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginLeft: 24,
    cursor: 'pointer',
  },
  title: {
    fontSize: 32,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 16,
  },
  button: {
    backgroundColor: `${gray200} !important`,
    padding: '8px 16px',
    borderRadius: 8,
  }
})

export default Header;
