import React, { useState } from 'react';
import { Button, makeStyles, MenuItem, TextField } from '@material-ui/core';

// posteriormente esses bairros serão trazidos do banco de dados;
const districts = [
  {
    value: 'NA',
    label: 'Selecione',
  },
  {
    value: 'NG',
    label: 'Nova Gameleira',
  },
  {
    value: 'NS',
    label: 'Nova Suiça',
  },
  {
    value: 'C',
    label: 'Centro',
  },
  {
    value: 'S',
    label: 'Savassi',
  },
];

const Register = () => {
  const { container, title, form, personalData, address, field, button } = useStyles();

  const [district, setDistrict] = useState(districts[0].value);

  return (
    <div className={container}>
      <div className={title}>Cadastro</div>
      <div className={form}>
        <div className={personalData}>
          <TextField className={field} id="text-field-name" variant="outlined" label="Nome" />
          <TextField className={field} id="text-field-cpf" variant="outlined" label="CPF" />
          <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" />
          <TextField className={field} id="text-field-telephone" variant="outlined" label="Telefone" />
        </div>
        <div className={address}>
          <TextField className={field} id="text-field-cep" variant="outlined" label="CEP" helperText="Somente são permitidos endereços na cidade de Belo Horizonte" />
          <TextField
            select
            id="select-district"
            variant="outlined"
            label="Bairro"
            value={district}
            onChange={e => setDistrict(e.target.value)}
          >
            {districts.map(d => (
              <MenuItem key={d.value} value={d.value}>
                {d.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField className={field} id="text-field-street" variant="outlined" label="Rua" />
          <TextField className={field} id="text-field-number" variant="outlined" label="Número" />
          <TextField className={field} id="text-field-complement" variant="outlined" label="Complemento" />
        </div>
      </div>
      <div className={button}>
        <Button variant="contained">Cadastrar</Button>
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
  personalData: {
    padding: 16,
    marginBottom: 24,
    border: 'solid 1px gray',
    borderRadius: 4,
  },
  address: {
    padding: 16,
    marginBottom: 24,
    border: 'solid 1px gray',
    borderRadius: 4,
  },
  field: {

  },
  button: {
    display: 'flex',
    justifyContent: 'right',
  }
})

export default Register;
