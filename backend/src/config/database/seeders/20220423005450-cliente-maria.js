'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Clientes", [
      {
        nome: "Maria F",
        cpf: "238.620.456-17",
        email: "f.Maria@mail.com",
        telefone: "(00) 98765-4321",
        senha: "$2a$08$CCXQNeypmFgygKys3zf/O.93uRfW3wHyItga4THMy303IFtC7rn5q",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Clientes", null, {});
  }
};
