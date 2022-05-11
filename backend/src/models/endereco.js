'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    idCliente: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
  });

  Endereco.associate = function(models) {
    Endereco.belongsTo(models.Cliente, {
      foreignKey: 'idCliente',
      onDelete: 'CASCADE'
    })
  }
  Endereco.associate = function(models) {
    Endereco.hasMany(models.Pedido, {
      foreignKey: 'idEndereco'
    })
  }

  return Endereco;
};