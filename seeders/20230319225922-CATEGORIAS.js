'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Categorias', 
    [
      {
      CATEGORIA_ID: 'CAES',
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 'GATOS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 'PEIXES',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 'AVES',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 'OUTROS PETS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 'ACESSÓRIOS',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('CATEGORIAS', null, {});
  }
};
