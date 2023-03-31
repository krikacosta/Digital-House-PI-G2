'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'CATEGORIA',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        CATEGORIA_NOME: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('CATEGORIA');
  }
};
