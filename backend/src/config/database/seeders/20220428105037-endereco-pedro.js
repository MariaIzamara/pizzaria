'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Enderecos", [
      {
        idCliente: 3,
        cep: "30000-020",
        bairro: "Barroca",
        rua: "Rua do Pedro",
        numero: 30,
        complemento: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Enderecos", null, {});
  }
};
