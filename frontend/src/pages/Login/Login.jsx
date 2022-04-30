import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp } from '../../hooks';
import { makeStyles, Button, TextField, CircularProgress } from '@material-ui/core';
import { requestConfigLogin } from '../../Utils/requestsConfigs';
import Header from '../../components/Header/Header';

const Login = () => {
  const { container, title, form, field, button } = useStyles();
  const navigate = useNavigate();

  const { loading, error, data, sendRequest } = useHttp('');
  // console.log({ loading, error, data });

  useEffect(() => {
    console.log('aqui', data);
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
    <>
      <Header loginDisabled={true} />
      <div className={container}>
        {loading ? <CircularProgress /> :
          <>
            <div className={title}>Login</div>
            <div className={form}>
              <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" onChange={event => handleChange(event, 'email')} />
              <TextField className={field} id="text-field-password" variant="outlined" label="Senha" onChange={event => handleChange(event, 'password')} />
            </div>
            <div className={button}>
              <Button variant="contained" onClick={() => login()}>Entrar</Button>
            </div>
          </>
        }
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
