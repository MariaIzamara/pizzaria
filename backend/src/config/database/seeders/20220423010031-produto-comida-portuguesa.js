'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Portuguesa",
        descricao: "Ela é feita com presunto, ovos, muçarela e ervilha. Tem quem só peça esse sabor desde sempre. Por que não dar uma chance então?",
        preco: 24.90,
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
