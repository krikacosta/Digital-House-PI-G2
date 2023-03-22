'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ESTOQUE', 
    [
      {
        PRODUTO_ID: 1,         // ALTERAR CONFORME ID DO PRODUTO CRIADO NA TABELA PRODUTOS       
        NOME_COR: 'Vermelho',  
        TAMANHO: 'P', 
        ESTOQUE_QTD: '20',
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 1,
        NOME_COR: 'Vermelho',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 20, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 1,
        NOME_COR: 'Vermelho',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 18, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 2,
        NOME_COR: 'Colorido',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 10, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 3,
        NOME_COR: 'Colorido',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 10, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 4,
        NOME_COR: 'Vermelho',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 15, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 5,
        NOME_COR: 'Madeira',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 8, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },

      {
        PRODUTO_ID: 6,
        NOME_COR: 'Azul',
        TAMANHO: 'P', 
        ESTOQUE_QTD: 20, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 6,
        NOME_COR: 'Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 28, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 6,
        NOME_COR: 'Azul',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 17, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 7,
        NOME_COR: 'Preto',
        TAMANHO: 'P', 
        ESTOQUE_QTD: 20, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 7,
        NOME_COR: 'Preto',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 19, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 7,
        NOME_COR: 'Preto',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 22, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 8,
        NOME_COR: 'Dinossauro',
        TAMANHO: 'P', 
        ESTOQUE_QTD: 30, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 8,
        NOME_COR: 'Dinossauro',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 27, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 8,
        NOME_COR: 'Dinossauro',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 21, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 9,
        NOME_COR: 'Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 33, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 10,
        NOME_COR: 'Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 36, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 11,
        NOME_COR: 'Sisal e Preto',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 50, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 12,
        NOME_COR: 'Sisal e Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 40, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 13,
        NOME_COR: 'Rosa',
        TAMANHO: 'P', 
        ESTOQUE_QTD: 42, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 13,
        NOME_COR: 'Rosa',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 35, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 13,
        NOME_COR: 'Rosa',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 16, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 14,
        NOME_COR: 'Inox',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 48, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 14,
        NOME_COR: 'Inox',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 52, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 15,
        NOME_COR: 'Madeira',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 29, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 15,
        NOME_COR: 'Madeira',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 23, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 16,
        NOME_COR: 'Vermelha e Azul',
        TAMANHO: 'P', 
        ESTOQUE_QTD: 51, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 16,
        NOME_COR: 'Vermelha e Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 37, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 16,
        NOME_COR: 'Vermelha e Azul',
        TAMANHO: 'G', 
        ESTOQUE_QTD: 44, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        PRODUTO_ID: 17,
        NOME_COR: 'Azul',
        TAMANHO: 'M', 
        ESTOQUE_QTD: 25, 
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      }

  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ESTOQUE', null, {});
     
  }
};
