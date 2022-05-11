'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Quatro queijos",
        descricao: "Os quatro queijos são mussarela, catupiry, provolone e parmesão. Contudo, algumas unidades utilizam gorgonzola. Informe-se antes de pedir, ok? De qualquer forma, é sempre uma ótima pedida.",
        preco: 31.90,
        imagem: "1e7VRNHeo8eCgc-FaqrNGa0STrQnjP-dV",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
