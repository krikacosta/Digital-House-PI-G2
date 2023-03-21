'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enderecos', 
    [
      {
        USUARIO_ID: 1,                
        CEP: '05073001',
        LOGRADOURO: 'Rua Nossa Senhora Lapa', 
        NUMERO: '270', 
        COMPLEMENTO: 'Apto 51', 
        BAIRRO: 'Lapa', 
        CIDADE: 'São Paulo', 
        ESTADO: 'SP',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
       {
        USUARIO_ID: 2,              
        CEP: '02925040',
        LOGRADOURO: 'Largo da Matriz de Nossa Senhora do Ó',  
        NUMERO: '170',
        COMPLEMENTO: 'Casa 5',
        BAIRRO: 'Freguesia do Ó',
        CIDADE:  'São Paulo',
        ESTADO: 'SP',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 7,                
        CEP: '29060370',
        LOGRADOURO: 'Rua Arthur Czartoryski',   
        NUMERO: '571', 
        COMPLEMENTO: 'Apto 23 Bloco 2',
        BAIRRO: 'Jardim da Penha',
        CIDADE: 'Vitória', 
        ESTADO: 'ES',
        ATIVO: 1,                        /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 8,             
        CEP: '24210375',
        LOGRADOURO: 'Rua Engenheiro Roberto Velasco Cardoso',   
        NUMERO: '321',  
        COMPLEMENTO: 'Apto 62',
        BAIRRO: 'Gragoatá',
        CIDADE: 'Niterói', 
        ESTADO: 'RJ',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 9,               
        CEP: '11055310',
        LOGRADOURO: 'Rua Dr. Assis Corrêa', 
        NUMERO: '55',
        COMPLEMENTO: 'A',
        BAIRRO: 'Gonzaga',
        CIDADE: 'Santos', 
        ESTADO: 'SP',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 10,            
        CEP: '38230000',
        LOGRADOURO: 'Av. Helena Sassioto Reigota',     
        NUMERO: '191',
        COMPLEMENTO: 'Casa 2',
        BAIRRO: 'Centro',
        CIDADE: 'Fronteira',
        ESTADO: 'MG',
        ATIVO: 1,                        /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 3,               
        CEP: '15085530',
        LOGRADOURO: 'Av Romeu Strazzi',    
        NUMERO: '1537',
        COMPLEMENTO: 'Bloco 2 Apto 23',
        BAIRRO: 'Higienópolis',
        CIDADE: 'São José do Rio Preto', 
        ESTADO: 'SP',
        ATIVO: 1,                     /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 3,               
        CEP: '15020270',
        LOGRADOURO: 'Rua Hilda Cesar',    
        NUMERO: '3950',
        COMPLEMENTO: '',
        BAIRRO: 'Jardim Alto Rio Preto',
        CIDADE:  'São José do Rio Preto',
        ESTADO: 'SP',
        ATIVO: 1,                      /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 4,              
        CEP: '22071032',
        LOGRADOURO: 'Rua Siqueira Campos',    
        NUMERO: '92',
        COMPLEMENTO: '',
        BAIRRO: 'Copacabana',
        CIDADE: 'Rio de Janeiro',
        ESTADO: 'RJ',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 5,              
        CEP: '92010170',
        LOGRADOURO: 'Rua Domingos Martins',    
        NUMERO: '114',
        COMPLEMENTO: '',
        BAIRRO: 'Centro',
        CIDADE: 'Canoas',
        ESTADO: 'RS',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 6,              
        CEP: '95703200',
        LOGRADOURO: 'Rua Herny Hugo Dreher',    
        NUMERO: '191',
        COMPLEMENTO: '',
        BAIRRO: 'Planalto',
        CIDADE: 'Bento Gonçalves',
        ESTADO: 'RS',
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 9,            
        CEP: '01152000',
        LOGRADOURO: 'Rua Barra Funda',    
        NUMERO: '824',
        COMPLEMENTO: '',
        BAIRRO: 'Barra Funda',
        CIDADE: 'São Paulo',
        ESTADO: 'SP',
        ATIVO: 1,                    /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        USUARIO_ID: 9,         
        CEP: '11440360',
        LOGRADOURO: 'Rua Colômbia',    
        NUMERO: '650',
        COMPLEMENTO: '',
        BAIRRO: 'Jardim Ana Maria',
        CIDADE: 'Guarujá',
        ESTADO: 'SP',
        ATIVO: 1,                     /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19) 
      }  
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ENDERECOS', null, {});
    
  }
};
