'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Caipira",
        descricao: "Frango, milho e catupiry, ou seja, não tem erro, né?",
        preco: 22.90,
        imagem: "1Zjfs-2Owazm2sXvYRthxmXXFPOwlZRov",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
