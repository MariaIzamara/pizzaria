import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks';
import { makeStyles, Button, TextField, CircularProgress } from '@material-ui/core';
import { gray100, primary } from '../../Utils/colors';
import { requestConfigLogin } from '../../Utils/requestsConfigs';
import Header from '../../components/Header/Header';

const Login = () => {
  const { container, containerLogin, title, form, field, button } = useStyles();
  const navigate = useNavigate();

  const { loading, error, data, sendRequest } = useHttp('');
  // console.log({ loading, error, data });

  useEffect(() => {
    if(data && data.token)
      navigate(`/${data.token}`);
  }, [data]);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const login = () => sendRequest(requestConfigLogin(loginData));

  const handleChange = (event, field) =>
    setLoginData(currentLoginData => ({
      ...currentLoginData,
      [field]: event.target.value,
    }));

  return (
    <div className={container}>
      <Header loginDisabled={true} />
      <div className={containerLogin}>
        {loading ? <CircularProgress /> :
          <>
            <div className={title}>Login</div>
            <div className={form}>
              <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" onChange={event => handleChange(event, 'email')} />
              <TextField className={field} id="text-field-password" variant="outlined" label="Senha" onChange={event => handleChange(event, 'password')} />
              <Button className={button} variant="contained" onClick={() => login()}>Entrar</Button>
            </div>
          </>
        }
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
  },
  containerLogin: {
    padding: 32,
    flexGrow: 1,
    flexBasis: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 24,
  },
  field: {
    width: 400,
  },
  button: {
    width: 'fit-content',
    color: gray100,
    backgroundColor: primary,
    padding: '8px 16px',
    borderRadius: 8,

    '&:hover': {
      backgroundColor: primary,
      boxShadow: '0 4px 1em gray',
    }
  },
})

export default Login;
