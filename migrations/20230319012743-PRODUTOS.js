'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'PRODUTOS',
      {
        ID: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        CATEGORIA_ID: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        NOME_PRODUTO: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false
        },
        DESCRICAO: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true
        },
        PRECO: {
          type: Sequelize.DataTypes.DECIMAL(5,2),
          allowNull: false
        },
        IMAGEM_URL: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true
        },
        PROMOCAO: {
          type: Sequelize.DataTypes.TEXT,
          defaultValue: 'NAO',
          allowNull: true
        },
        DESTAQUE: {
          type: Sequelize.DataTypes.TEXT,
          defaultValue: 'NAO',
          allowNull: true
        },
        ESTOQUE: {
          type: Sequelize.DataTypes.TEXT,
          defaultValue: 'NAO',
          allowNull: true
        },
        ATIVO: {
          type: Sequelize.DataTypes.TEXT,
          defaultValue: 'NAO',
          allowNull: true
        },
        CREATED_AT: Sequelize.DataTypes.DATE,
        UPDATED_AT: Sequelize.DataTypes.DATE,
        DELETED_AT: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('PRODUTOS');
  }
};
