'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PEDIDOS', [
      {
        USUARIO_ID: 1,         // ALTERAR CONFORME ID DO USUÁRIO       
        ENDERECO_ID: 1,         // ALTERAR CONFORME ID DO ENDEREÇO
        CARRINHO: 0,            // 1: SIM e 0: NÃO
        COMPRA: 1,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 3,                
        ENDERECO_ID: 8,         
        CARRINHO: 1,            
        COMPRA: 0,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 4,                
        ENDERECO_ID: 9,         
        CARRINHO: 1,            
        COMPRA: 0,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 9,                
        ENDERECO_ID: 13,         
        CARRINHO: 0,            
        COMPRA: 1,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 10,                
        ENDERECO_ID: 6,         
        CARRINHO: 1,            
        COMPRA: 0,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('PEDIDOS', null, {});
     
  }
};
