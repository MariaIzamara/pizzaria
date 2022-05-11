const { encryptor } = require("../helpers");

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  Cliente.associate = function(models) {
    Cliente.hasMany(models.Endereco, {
      foreignKey: 'idCliente'
    })
  }

  Cliente.beforeSave(async (cliente, options) => {
    const senha = await encryptor.hashPassword(cliente.senha);
    if (cliente.changed("senha")) {
      Object.assign(cliente, { senha });
    }
    return cliente;
  });

  return Cliente;
};