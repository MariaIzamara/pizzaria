const { StatusCodes } = require("http-status-codes");
const { pedidosRepository } = require("../../repositories");

module.exports.deletar = async (id) => {
  const pedido = await pedidosRepository.get({ id });

  if (!pedido) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("client"),
    };
  }

  pedido.status = 'cancelado'
  response = await pedidosRepository.update(pedido)

  return "Pedido cancelado com sucesso!"
};
