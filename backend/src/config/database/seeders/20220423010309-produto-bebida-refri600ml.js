'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Refigerante 600ml",
        descricao: "Virá um dos seguintes sabores aleatoriamente: Coca, Fanta, Guarana Antartica, Sprite.",
        preco: 8.00,
        imagem: "107jOCCjVP0g7fERhQGS3htOouAjbPtBZ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
