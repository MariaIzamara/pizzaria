const { pedidosRepository } = require("../../repositories");

module.exports.novo = async (idEndereco, produtos, precoFinal, comentario) => {
    novoPedido = {
        idEndereco ,
        produtos ,
        precoFinal ,
        comentario ,
        status: "fazendo",
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const inserted = await pedidosRepository.create(novoPedido)

    return inserted
};