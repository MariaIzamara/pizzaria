'use strict';

const { INTEGER } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Exercises", [
      {
        groupMuscle: "back",
        exercise: "Puchador aberto",
        url: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Exercises", null, {});
  }
};