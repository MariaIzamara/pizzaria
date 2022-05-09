'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "promoção",
        nome: "Pizza Portuguesa + Pizza Calabresa + Refrigerante 2L",
        descricao: "Trocas de sabores não são permitidas",
        preco: 46.90,
        imagem: "19E9EKSaihlfhdKl7vv8UYLAjIisG1RM7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
