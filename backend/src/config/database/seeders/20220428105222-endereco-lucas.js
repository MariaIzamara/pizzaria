'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Enderecos", [
      {
        idCliente: 4,
        cep: "30000-030",
        bairro: "Vila Oeste",
        rua: "Rua do Lucas",
        numero: 45,
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
