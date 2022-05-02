
const { produtosRepository } = require("../../repositories");

module.exports.get = async (tipo) => {
  const response = await produtosRepository.list({ where: {tipo} });

  return response;
};
