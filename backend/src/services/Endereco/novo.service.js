const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { enderecoRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.novo = async (idCliente, cep, bairro, rua, numero, complemento) => {
    const endereco = await enderecoRepository.get({ idCliente, cep, numero});

    if(endereco){
        throw{
            status: StatusCodes.CONFLICT,
            message: messages.alreadyExists("adress")
        }
    }

    novoEndereco = {
        idCliente,
        cep,
        bairro,
        rua,
        numero,
        complemento,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const inserted = await enderecoRepository.create(novoEndereco)

    return inserted
};