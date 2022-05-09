'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Frango com Catupiry",
        descricao: "Este também está na lista dos mais pedidos da nossa pizzaria. E não é por menos, é uma combinação fenomenal. Desconfie de pessoas que não gostam de pizza de frango com catupiry.",
        preco: 22.90,
        imagem: "1cUqIjklHZKVSJ0usg5Dg-U9KOx96wEa2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
