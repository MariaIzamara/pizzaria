'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Produtos", [
      {
        tipo: "comida",
        nome: "Pizza Marguerita",
        descricao: "Quer pizza mais tradicional que essa? Veja neste link sobre o sabor na história da pizza. Estamos falando aqui de muçarela com manjericão. Ou seja, aquele extra que torna o sabor ainda mais especial.",
        preco: 19.90,
        imagem: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Produtos", null, {});
  }
};
