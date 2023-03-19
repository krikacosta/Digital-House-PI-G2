'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ENDERECOS',
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
        CEP: {
          type: Sequelize.DataTypes.CHAR(8),
          allowNull: false
        },
        LOGRADOURO: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: true
        },
        NUMERO: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: true
        },
        COMPLEMENTO: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull: true
        },
        BAIRRO: {
          type: Sequelize.DataTypes.STRING(40),
          allowNull: true
        },
        CIDADE: {
          type: Sequelize.DataTypes.STRING(40),
          allowNull: true
        },
        ESTADO: {
          type: Sequelize.DataTypes.CHAR(2),
          allowNull: true
        },
        ATIVO: {
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
    await queryInterface.dropTable('ENDERECOS');
  }
};
