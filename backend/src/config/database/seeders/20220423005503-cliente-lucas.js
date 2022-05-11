'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Clientes", [
      {
        nome: "Lucas J",
        cpf: "631.597.796-02",
        email: "j.lucas@mail.com",
        telefone: "(00) 11223-3445",
        senha: "$2a$08$DBvHu5OkLyzVQmgT.DDMZuaMKJYqrJxn0QQtnk7/vT2poKBXUUPI.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Clientes", null, {});
  }
};
