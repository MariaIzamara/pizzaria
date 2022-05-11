'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refrigerante Lata 350ml",
        descricao: "Virá um dos seguintes sabores aleatoriamente: Coca, Fanta, Guarana Antartica, Sprite.",
        preco: 5.00,
        imagem: "1XFyEfhAVQR7CGqlAaq8YBQCCGMVzCNuH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
