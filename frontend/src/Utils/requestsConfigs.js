const baseUrl = 'https://backendpizzaria.herokuapp.com/api/v1';

export const requestConfigHello = {
  url: `${baseUrl}/hello`,
};

export const requestConfigRegister = data => {
  const { name, cpf, email, phone, password } = data;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    url: `${baseUrl}/cliente/novo`,
    body: {
      nome: name,
      cpf: cpf,
      email: email,
      telefone: phone,
      senha: password,
    },
  };
};

export const requestConfigAddress = data => {
  const { cep, district, street, number, complement } = data;
  return {
    method: 'POST',
    headers: {
      'Authorization': '-',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    url: `${baseUrl}/endereco/novo`,
    body: {
      cep: cep,
      bairro: district,
      rua: street,
      numero: parseInt(number),
      complemento: complement,
    },
  };
};

export const requestConfigLogin = data => {
  const { email, password } = data;
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    url: `${baseUrl}/cliente/login`,
    body: {
      email: email,
      senha: password,
    },
  };
};