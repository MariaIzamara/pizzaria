'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refrigerante 2L",
        descricao: "Virá um dos seguintes sabores aleatoriamente: Coca, Fanta, Guarana Antartica, Sprite.",
        preco: 12.00,
        imagem: "1GOjRWwmDbRGaEm9K0foW8vqPdVXCUHhu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
