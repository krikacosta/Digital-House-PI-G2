'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('PEDIDOS_ITENS', [
      {
        PEDIDO_ID: 1,
        PRODUTO_ID: 6,
        NOME_COR: 'Azul',
        TAMANHO: 'P',
        QUANTIDADE: 1,
        PRECO: 57,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PEDIDO_ID: 2,
        PRODUTO_ID: 2,
        NOME_COR: 'Colorido',
        TAMANHO: 'M',
        QUANTIDADE: 1,
        PRECO: 66,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PEDIDO_ID: 3,
        PRODUTO_ID: 1,
        NOME_COR: 'Vermelho',
        TAMANHO: 'G',
        QUANTIDADE: 2,
        PRECO: 99,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PEDIDO_ID: 4,
        PRODUTO_ID: 12,
        NOME_COR: 'Sisal e Azul',
        TAMANHO: 'M',
        QUANTIDADE: 1,
        PRECO: 49,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PEDIDO_ID: 5,
        PRODUTO_ID: 5,
        NOME_COR: 'Vermelho',
        TAMANHO: 'M',
        QUANTIDADE: 3,
        PRECO: 88,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('PEDIDOS_ITENS', null, {});
     
  }
};
