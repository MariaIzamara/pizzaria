const { Pedido } = require("../models");

module.exports = {
  list: (query) => Pedido.findAndCountAll(query),
  getById: (id) => Pedido.findByPk(id),
  get: (params) => Pedido.findOne({ where: params }),
  create: (params) => Pedido.create(params),
  update: (pedido) => pedido.save(),
  destroy: (id) => Pedido.destroy({ where: { id } }),
};
