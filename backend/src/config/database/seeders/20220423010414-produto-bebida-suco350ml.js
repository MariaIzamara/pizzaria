'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Suco Lata",
        descricao: "Virá um dos seguintes sabores aleatoriamente: Uva, Laranja, Goiaba, Pessego, Manga.",
        preco: 5.00,
        imagem: "1Xr2O6cb3UPWzcIXdZSFn7_mFK0HbemNw",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
