'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Enderecos", [
      {
        idCliente: 2,
        cep: "30000-010",
        bairro: "Nova Suiça",
        rua: "Rua da Maria",
        numero: 20,
        complemento: "casa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Enderecos", null, {});
  }
};
