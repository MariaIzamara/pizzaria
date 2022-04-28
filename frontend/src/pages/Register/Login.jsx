import React, { useState } from 'react';
import { useHttp } from '../../hooks';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { requestConfigLogin } from '../../Utils/requestsConfigs';
import Header from '../../components/Header/Header';

const Login = () => {
  const { container, title, form, field, button } = useStyles();

  const { loading, error, data, sendRequest } = useHttp('');
  // console.log({ loading, error, data });

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
    <>
      <Header loginDisabled={true} />
      <div className={container}>
        <div className={title}>Login</div>
        <div className={form}>
          <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" onChange={event => handleChange(event, 'email')} />
          <TextField className={field} id="text-field-password" variant="outlined" label="Senha" onChange={event => handleChange(event, 'password')} />
        </div>
        <div className={button}>
          <Button variant="contained" onClick={() => login()}>Entrar</Button>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    padding: 32,
  },
  title: {
    fontSize: 32,
    textAlign: 'left',
    marginBottom: 24,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: 16,
  },
  button: {
    display: 'flex',
    justifyContent: 'right',
  }
})

export default Login;
