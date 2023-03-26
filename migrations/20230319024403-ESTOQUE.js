'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ESTOQUES',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        PRODUTO_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        NOME_COR: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull: false
        },
        TAMANHO: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: false
        },
        ESTOQUE_QTD: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ESTOQUES');
  }
};
