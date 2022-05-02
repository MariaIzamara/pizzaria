const { enderecoRepository } = require("../../repositories");

module.exports.get = async (idCliente) => {
  const response = await enderecoRepository.list({ where: {idCliente} });

  return response;
};
