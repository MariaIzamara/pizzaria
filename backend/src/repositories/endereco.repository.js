const { Endereco } = require("../models");

module.exports = {
  list: (query) => Endereco.findAndCountAll(query),
  getById: (id) => Endereco.findByPk(id),
  get: (params) => Endereco.findOne({ where: params }),
  create: (params) => Endereco.create(params),
  update: (endereco) => endereco.save(),
  destroy: (id) => Endereco.destroy({ where: { id } }),
};
