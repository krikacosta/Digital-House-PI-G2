'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'PEDIDOS_ITENS',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        PEDIDO_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        PRODUTO_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        NOME_COR: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull: false,
        },
        TAMANHO: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: false,
        },
        QUANTIDADE: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        PRECO: {
          type: Sequelize.DataTypes.DECIMAL(2),
          allowNull: false
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PEDIDOS_ITENS');
  }
};
