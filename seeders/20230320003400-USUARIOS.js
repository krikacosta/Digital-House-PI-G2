'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        
    await queryInterface.bulkInsert('Usuario', 
    [
      {
        TIPO_USUARIO: 0,                /*  0 É ADMINISTRADOR */
        NOME: 'Renata Alves', 
        CPF: '26463512885', 
        EMAIL: 'renata@gmail.com', 
        DATA_NASC: '1990-12-01', 
        FONE: '11992182323', 
        SENHA: 'renataalves13', 
        ATIVO: 1,                       /*  ATIVO: SIM */
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        TIPO_USUARIO: 0,    
        NOME: 'Rodrigo Marques',
        CPF: '26963222823',
        EMAIL: 'rodrigo@gmail.com',
        DATA_NASC: '1988-06-11',
        FONE: '1197212319',
        SENHA: 'rodrigomm',
        ATIVO: 1,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        TIPO_USUARIO: 1,                  /*  1 É USUÁRIO */
        NOME: 'André Godoy Junior',     
        CPF: '29123156399',
        EMAIL: 'andrejr@gmail.com',
        DATA_NASC: '1978-01-27',
        FONE: '17921652399',
        SENHA: 'andregjr',
        ATIVO: 1,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        TIPO_USUARIO: 1, 
        NOME: 'Maria do Carmos Silva',     
        CPF: '27561298755',
        EMAIL: 'mariacarmos@hotmail.com',
        DATA_NASC: '1980-04-22',
        FONE: '21982821020',
        SENHA: 'mcsilva',
        ATIVO: 1,
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME:  'José Henriques Lima',     
      CPF: '29344418674',
      EMAIL: 'josehlima@outlook.com',
      DATA_NASC: '1976-09-15',
      FONE: '51969761003',
      SENHA: '232498',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME:  'Ronaldo Cardoso Melo',     
      CPF: '28503428678', 
      EMAIL: 'ronaldomelo@yahoo.com.br',
      DATA_NASC: '1985-10-18',
      FONE: '54973736436',
      SENHA: 'ronaldo10',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME: 'Reginaldo Gonçalves de Jesus',     
      CPF: '38891265355',
      EMAIL: 'reginaldojesus@gmail.com',
      DATA_NASC: '2000-02-03',
      FONE: '27964523300',
      SENHA: 'r0302gj',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME: 'Adriana Espedito Souza',     
      CPF: '31209854980',
      EMAIL: 'adrianaesp@outlook.com',
      DATA_NASC: '2002-07-07',
      FONE: '21955493432',
      SENHA: 'drikasouza',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME: 'Fabiana Araújo Carvalho',     
      CPF: '30198721033',
      EMAIL: 'fabianaacarva@hotmail.com',
      DATA_NASC: '1999-03-16',
      FONE: '13989765522',
      SENHA: 'fabicarva01',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
    {
      TIPO_USUARIO: 1, 
      NOME: 'Isabella Siqueira Campos',     
      CPF: '33387208543',
      EMAIL: 'isacampos@hotmail.com',
      DATA_NASC: '2004-01-29',
      FONE: '34990231973',
      SENHA: 'isaisa04',
      ATIVO: 1,
      CREATED_At: (new Date()).toJSON().substring(0,19),
      UPDATED_AT: (new Date()).toJSON().substring(0,19)
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('USUARIO', null, {});
  }
};
