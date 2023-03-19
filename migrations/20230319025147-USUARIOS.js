'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'USUARIOS',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        TIPO_USUARIO: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        NOME: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false
        },
        CPF: {
          type: Sequelize.DataTypes.CHAR(11),
          allowNull: false,
          unique: true
        },
        EMAIL: {
          type: Sequelize.DataTypes.STRING(40),
          allowNull: false,
          unique: true
        },
        DATA_NASC: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false
        },
        FONE: {
          type: Sequelize.DataTypes.STRING(15),
          allowNull: true
        },
        SENHA: {
          type: Sequelize.DataTypes.STRING(15),
          allowNull: false
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
    await queryInterface.dropTable('USUARIOS');
  }
};
