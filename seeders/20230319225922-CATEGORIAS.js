'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Categorias', 
    [
      {
      CATEGORIA_NOME: 'CAES',
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_NOME: 'GATOS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_NOME: 'PEIXES',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_NOME: 'AVES',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_NOME: 'OUTROS PETS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_NOME: 'ACESSÓRIOS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('CATEGORIAS', null, {});
  }
};
