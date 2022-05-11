'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Clientes", [
      {
        nome: "Pedro D",
        cpf: "543.511.816-64",
        email: "d.pedro@mail.com",
        telefone: "(00) 12345-9876",
        senha: "$2a$08$Im.2t3xhPk4fEgbXv4Qy..0Fw9Qq1X93XaDhF9seXRZvLdCZiMz3O",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Clientes", null, {});
  }
};
