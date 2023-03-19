'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'PEDIDOS',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        USUARIO_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        ENDERECO_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        CARRINHO: {
          type: Sequelize.DataTypes.TINYINT,
          allowNull: true
        },
        COMPRA: {
          type: Sequelize.DataTypes.TINYINT,
          allowNull: true
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PEDIDOS');
  }
};
