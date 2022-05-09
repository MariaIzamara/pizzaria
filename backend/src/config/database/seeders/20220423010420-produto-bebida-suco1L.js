'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "bebida",
        nome: "Suco 1L",
        descricao: "Escolha seu sabor nos comentarios: Uva, Laranja, Goiaba, Pessego, Manga. Por padrão vai Laranja.",
        preco: 11.00,
        imagem: "1oZlazIQDbZtjobCjPlkBmRIpfSiO6uzr",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
