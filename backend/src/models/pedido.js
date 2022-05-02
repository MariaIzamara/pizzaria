'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido.init({
    idEndereco: DataTypes.INTEGER,
    produtos: DataTypes.STRING,
    precoFinal: DataTypes.DOUBLE,
    comentario: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedido',
  });

  Pedido.associate = function(models) {
    Pedido.belongsTo(models.Endereco, {
      foreignKey: 'idEndereco',
      onDelete: 'CASCADE'
    })
  }

  return Pedido;
};