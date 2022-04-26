import React, { useState } from 'react';
import { useHttp } from '../../hooks';
import { Button, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { requestConfigRegister, requestConfigAddress } from '../../Utils/requestsConfigs';
import Header from '../../components/Header/Header';

// posteriormente esses bairros serão trazidos do banco de dados;
const districts = [
  {
    key: 'NA',
    value: 'Selecione',
  },
  {
    key: 'NG',
    value: 'Nova Gameleira',
  },
  {
    key: 'NS',
    value: 'Nova Suiça',
  },
  {
    key: 'C',
    value: 'Centro',
  },
  {
    key: 'S',
    value: 'Savassi',
  },
];

const Register = () => {
  const { container, title, form, personal, address, field, button } = useStyles();

  const { loading, error, data, sendRequest } = useHttp('');
  // console.log({ loading, error, data });

  const [district, setDistrict] = useState(districts[0].value);
  const [personalData, setPersonalData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
  });
  const [addressData, setAddressData] = useState({
    cep: '',
    district: '',
    street: '',
    number: '',
    complement: '',
  });

  const registerUser = () => sendRequest(requestConfigAddress(addressData)); // sendRequest(requestConfigRegister(personalData));

  const handleChange = (event, field, type = 'personal') => type === 'address' ?
    setAddressData(currentAddressData => ({
      ...currentAddressData,
      [field]: event.target.value,
    }))
    :
    setPersonalData(currentPersonalData => ({
      ...currentPersonalData,
      [field]: event.target.value,
    }))

  return (
    <>
      <Header />
      <div className={container}>
        <div className={title}>Cadastro</div>
        <div className={form}>
          <div className={personal}>
            <TextField className={field} id="text-field-name" variant="outlined" label="Nome" onChange={event => handleChange(event, 'name')} />
            <TextField className={field} id="text-field-cpf" variant="outlined" label="CPF" onChange={event => handleChange(event, 'cpf')} />
            <TextField className={field} id="text-field-email" variant="outlined" label="E-mail" onChange={event => handleChange(event, 'email')} />
            <TextField className={field} id="text-field-phone" variant="outlined" label="Celular" onChange={event => handleChange(event, 'phone')} />
            <TextField className={field} id="text-field-password" variant="outlined" label="Senha" onChange={event => handleChange(event, 'password')} />
          </div>
          <div className={address}>
            <TextField className={field} id="text-field-cep" variant="outlined" label="CEP" helperText="Somente são permitidos endereços na cidade de Belo Horizonte" onChange={event => handleChange(event, 'cep', 'address')} />
            <TextField
              select
              id="select-district"
              variant="outlined"
              label="Bairro"
              value={district}
              onChange={event => {
                setDistrict(event.target.value);
                handleChange(event, 'district', 'address')
              }}
            >
              {districts.map(d => (
                <MenuItem key={d.key} value={d.value}>
                  {d.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField className={field} id="text-field-street" variant="outlined" label="Rua" onChange={event => handleChange(event, 'street', 'address')} />
            <TextField className={field} id="text-field-number" variant="outlined" label="Número" onChange={event => handleChange(event, 'number', 'address')} />
            <TextField className={field} id="text-field-complement" variant="outlined" label="Complemento" onChange={event => handleChange(event, 'complement', 'address')} />
          </div>
        </div>
        <div className={button}>
          <Button variant="contained" onClick={() => registerUser()}>Cadastrar</Button>
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
  personal: {
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
