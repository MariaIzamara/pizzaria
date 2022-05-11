const { Produto } = require("../models");

module.exports = {
  list: (query) => Produto.findAndCountAll(query),
  getById: (id) => Produto.findByPk(id),
  get: (params) => Produto.findOne({ where: params }),
  create: (params) => Produto.create(params),
  update: (produto) => produto.save(),
  destroy: (id) => Produto.destroy({ where: { id } }),
};
