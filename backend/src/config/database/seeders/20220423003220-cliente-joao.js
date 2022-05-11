'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Clientes", [
      {
        nome: "Joao F",
        cpf: "092.407.046-39",
        email: "f.joao@mail.com",
        telefone: "(00) 12345-6789",
        senha: "$2a$08$3KbiV82yEJgvc2ujP9gyZer4tUw36h9BFOmKqTgOuqhEby1cDEc/e",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('ALTER SEQUENCE "Enderecos_id_seq"  RESTART WITH 1')
    return queryInterface.bulkDelete("Clientes", null, {});
  }
};
