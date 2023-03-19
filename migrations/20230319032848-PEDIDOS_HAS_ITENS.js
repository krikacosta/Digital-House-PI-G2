'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'PEDIDOS_HAS_ITENS',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        PEDIDOS_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true
        },
        PEDIDOS_ITENS_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PEDIDOS_HAS_ITENS');
  }
};
