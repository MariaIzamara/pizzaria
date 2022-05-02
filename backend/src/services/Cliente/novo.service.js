const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const { encryptor, messages } = require("../../helpers");
const { constants } = require("../../utils");
const { clientesRepository } = require("../../repositories");
const { promisify } = require("util");

module.exports.novo = async (nome, cpf, email, telefone, senha) => {
    const cliente = await clientesRepository.get({ email });

    if(!cliente){
        const novo_cliente = {
            nome,
            cpf,
            email,
            telefone,
            senha,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        
        await clientesRepository.create(novo_cliente);
    } else {
        cliente.nome = nome;
        cliente.cpf = cpf;
        cliente.email = email;
        cliente.telefone = telefone;
        cliente.senha = senha;
        cliente.updatedAt = new Date();

        await clientesRepository.update(cliente)
    }

    const inserted = await clientesRepository.get({ email });

    const payload = {
        id: inserted.id,
        email: inserted.email,
    }

    const sign = promisify(jwt.sign);
    const token = await sign(payload, constants.jwtToken);
  
    return { email, token };
};