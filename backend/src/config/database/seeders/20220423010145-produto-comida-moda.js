'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza A moda",
        descricao: "A moda da casa e simplesmente perfeita. Não existem palavras para descrever o quão incrível ela é. Tudo na proporção certa para matar a fome com maestria.",
        preco: 29.90,
        imagem: "1WAHaKuiT7bnu2_TBoMbY6MzjzL4D0gof",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
