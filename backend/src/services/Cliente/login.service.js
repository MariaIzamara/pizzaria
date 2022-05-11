const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { clientesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.login = async (email, senha) => {
  const cliente = await clientesRepository.get({ email });

  if (!cliente) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound("client"),
    };
  }

  const valido = await encryptor.comparePassword(senha, cliente.senha);
  if (!valido) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      message: messages.invalidPassword,
    };
  }

  const payload = {
    id: cliente.id,
    email: cliente.email,
  };

  const sign = promisify(jwt.sign);
  const token = await sign(payload, constants.jwtToken);

  return { email, token };
};
