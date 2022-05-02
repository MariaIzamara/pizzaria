'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Baiana",
        descricao: "Essa só não é uma das tradicionais, mas também uma das mais pedidas por aqui. Ela é feita com calabresa moída, ovos, pimenta, cebola e um toque de parmesão.",
        preco: 20.90,
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
