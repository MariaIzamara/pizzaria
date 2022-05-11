'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Enderecos", [
      {
        idCliente: 1,
        cep: "300000-000",
        bairro: "Gameleira",
        rua: "Rua do João",
        numero: 10,
        complemento: "a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Enderecos", null, {});
  }
};
