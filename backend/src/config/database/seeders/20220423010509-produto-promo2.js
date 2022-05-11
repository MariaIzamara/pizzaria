'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "Pizza Baiana  + Pizza Portuguesa + 2 Refri Lata",
        descricao: "Trocas de sabores não são permitidas",
        preco: 39.90,
        imagem: "1YtOICyINC2G1RxBKrOpUOFh8B6S2nXbu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
