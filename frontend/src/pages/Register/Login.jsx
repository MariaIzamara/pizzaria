import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const Login = () => {
  const { container, title, form, field, button } = useStyles();

  return (
    <div className={container}>
      <div className={title}>Login</div>
      <div className={form}>
        <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" />
        <TextField className={field} id="text-field-password" variant="outlined" label="Senha" />
      </div>
      <div className={button}>
        <Button variant="contained">Login</Button>
      </div>
    </div>
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
