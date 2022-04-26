const baseUrl = 'https://backendpizzaria.herokuapp.com/api/v1';

export const requestConfigHello = {
  url: `${baseUrl}/hello`,
};

export const requestConfigRegister = personalData => {
  const { name, cpf, email, phone, password } = personalData;
  return {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
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

export const requestConfigAddress = address => {
  const { cep, district, street, number, complement } = address;
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