const { Cliente } = require("../models");

module.exports = {
  list: (query) => Cliente.findAndCountAll(query),
  getById: (id) => Cliente.findByPk(id),
  get: (params) => Cliente.findOne({ where: params }),
  create: (params) => Cliente.create(params),
  update: (cliente) => cliente.save(),
  destroy: (id) => Cliente.destroy({ where: { id } }),
};
