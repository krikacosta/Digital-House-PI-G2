'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PRODUTOS', 
    [
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Coleira Amorosso',  
        DESCRICAO: 'Produzida com 4 camadas de fita polipropileno, costuras triplamente reforçadas, metais de altíssima qualidade e resistência.',
        PRECO: 101.00,
        IMAGEM_URL: 'https://img.irroba.com.br/fit-in/600x600/filters:format(webp):fill(fff):quality(95)/amorosso/catalog/vermelhabasica555.jpeg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0,
        ATIVO: 1,                       //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 3,                
        NOME_PRODUTO: 'Enfeite Aquário Castelo Medieval',   
        DESCRICAO: 'Enfeite fabricado em resina e pintura atóxica.',  
        PRECO: 65.91,
        IMAGEM_URL: 'https://http2.mlstatic.com/D_NQ_NP_846040-MLB50865019615_072022-O.webp',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,           //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 3,                 
        NOME_PRODUTO: 'Enfeite Aquário Arca',  
        DESCRICAO: 'Utilizado como refúgio para os peixes. O enfeite ARCA é todo oco por dentro, permitindo que os peixes entrem e saiam, dando uma sensação de refúgio  e demarcação de território.',  
        PRECO: 76.90,
        IMAGEM_URL: 'https://images.tcdn.com.br/img/img_prod/662501/enfeite_para_aquarios_arca_decoracao_e_esconderijo_fragata_4141_1_2974510867abbaa80d78df287e0fa316.jpg', 
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 4,               
        NOME_PRODUTO: 'Comedouro de Pássaros para Jardim',   
        DESCRICAO: 'Comedouro para pássaros livres, ideal para per pendurado em galhos de árvores ou varandas. Possui pequenos poleiros que permitem aos pássaros soltos na natureza se alimentar diretamente no comedouro.', 
        PRECO: 15.99, 
        IMAGEM_URL: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/162/797/products/3720c759997f29116bc48e94055787f51-e3b73aa9b59fb911c216449550375946-640-0.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 4,                 
        NOME_PRODUTO: 'Comedouro de Casinha para Pássaros ',
        DESCRICAO: 'Madeira de Reflorestamento. Designs únicos e contemporâneos priorizando a qualidade e funcionalidade do produto final.',
        PRECO: 88.10,
        IMAGEM_URL: 'https://img.elo7.com.br/product/main/2F18090/casinha-comedouro-para-passaros.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Capa Slim Azul',   
        DESCRICAO: 'Capa Slim para cachorro é confeccionado em soft super macio. Possui velcro para ficar mais fácil para vestir seu cachorro, o velcro fecha na barriguinha do seu pet.', 
        PRECO: 57.00, 
        IMAGEM_URL: 'https://images.tcdn.com.br/img/img_prod/470728/capa_de_chuva_4217_1_20190314161523.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Pulôver',   
        DESCRICAO: 'Pulôver para cachorro confeccionado em Soft atoalhado tecido bem elástico que proporciona conforto e mobilidade para seu pet.', 
        PRECO: 64.50, 
        IMAGEM_URL: 'https://www.petlove.com.br/images/products/162908/product/Pulover-Pickorruchos-Jacquard---Cinza2.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                   //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Pijama Dinossauro', 
        DESCRICAO: 'O pijama é super quetinho e tem aquele toque gostoso, tipo matinha de dormir.',  
        PRECO: 69.00,
        IMAGEM_URL: 'https://cdn.shopify.com/s/files/1/0573/8358/3844/products/9_4bbc1365-2082-4f35-a6b0-7a256fd3a1db.png?v=1656105173&width=600',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                   //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Bebedouro Fonte Purificador', 
        DESCRICAO: 'Bebedouro e purificador de água para cães e gatos. Bastante fácil de montar, basta adicionar água na base até completar 2 litros.',
        PRECO: 90.90,
        IMAGEM_URL: 'https://images.tcdn.com.br/img/img_prod/742943/bebedouro_fonte_purificador_para_caes_gatos_2815_1_32c47bcc8cb58063326dc6f7eb83c023.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                  //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 2,               
        NOME_PRODUTO: 'Fonte Bebedouro Para Gatos Água Corrente Azul 110v',
        DESCRICAO: 'Fonte bebedouro elétrica para gatos e cães.com a fonte bebedouro elétrica, seu pet se manterá hidratado com água corrente como se estivesse na natureza.', 
        PRECO: 96.65, 
        IMAGEM_URL: 'https://images-americanas.b2w.io/produtos/3027903162/imagens/fonte-bebedouro-para-gatos-agua-corrente-azul-110v-furacao-pet-0233/3027903162_1_xlarge.jpg', 
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 2,            
        NOME_PRODUTO: 'Brinquedo Harem Gigante',
        DESCRICAO: 'Madeira MDF de alta qualidade, revestimento em tecido pelúcia e canos em corda sisal.',
        PRECO: 99.00, 
        IMAGEM_URL: 'https://img.elo7.com.br/product/main/2BD932A/brinquedo-gato-h-a-r-e-m.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 2,                 
        NOME_PRODUTO: 'Arranhador Brinquedo Gato Lua',
        DESCRICAO: 'O brinquedo tem mola que vai e volta e anima o gatinho e o estimula os sentidos para as brincadeiras.', 
        PRECO: 49.10, 
        IMAGEM_URL: 'https://images-americanas.b2w.io/produtos/01/00/img/3293024/9/3293024970_1SZ.jpg',
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                 
        NOME_PRODUTO: 'Brinquedo Interativo com Dispenser para Ração',
        DESCRICAO: 'É um brinquedo recomendado pelos veterinários e adestradores, pois ajuda muito seu melhor amigo a se excitar de maneira saudável. Ajudando assim aliviar o stress e também a passar o tempo quando você não está com ele.', 
        PRECO: 58.90, 
        IMAGEM_URL: 'https://static3.tcdn.com.br/img/img_prod/719253/brinquedo_interativo_para_cachorro_filhote_kong_puppy_com_dispenser_para_racao_rosa_1129_1_f3f47f2566298b67e4599d1881c3ed5a.jpg', 
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                 
        NOME_PRODUTO: 'Comedouro e Bebedouro em Inox',
        DESCRICAO: 'Confeccionado em compensado Naval 15mm , com pintura atoxica de esmalte sintético.',  
        PRECO: 94.50,
        IMAGEM_URL: 'https://img.elo7.com.br/product/main/2FE7FDA/comedouro-e-bebedouro-pet-10cm-altura-potes-inox-480ml.jpg', 
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                
        NOME_PRODUTO: 'Casinha Madeira Chalé',
        DESCRICAO: 'Material envernizado do lado externo, garantindo maior proteção ao raios solares.', 
        PRECO: 99.00, 
        IMAGEM_URL: 'https://images.tcdn.com.br/img/img_prod/1103037/casinha_cachorro_madeira_no_2_917_1_5e564892a84c8bb859713c1430107748.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 1,                 
        NOME_PRODUTO: 'Coleira Toh Outdoor Fiji',
        DESCRICAO: 'A Coleira e Guia Toh Outdoor Fiji é elaborada com poliéster ultra macio, fecho e regulador em nylon para proporcionar maior segurança e versatilidade.', 
        PRECO: 63.99, 
        IMAGEM_URL: 'https://www.petlove.com.br/images/products/215376/product/Coleira_e_Guia_Toh_Outdoor_para_C%C3%A3es_Fiji_2425790_3.jpg?1627691693',
        PROMOCAO: 0, 
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 6,                 
        NOME_PRODUTO: 'Piscina meu pet 120x30cm ',
        DESCRICAO: 'Monte sua piscina meu pet de forma prática e rápida, atenção, não é necessário inflar, apenas montar.', 
        PRECO: 93.00, 
        IMAGEM_URL: 'https://terrazoo-ecommerce-images.s3.amazonaws.com/uploads/2021/12/473898.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 5,                 
        NOME_PRODUTO: 'Bebedouro para Roedores Bico Alumínio',
        DESCRICAO: 'Bico de Alumínio, Suporte e bico removível, Capacidade: 290 ml, Ideal para gaiolas de Coelho, Hamster e Chinchila, Super leve', 
        PRECO: 22.90, 
        IMAGEM_URL: 'https://images.tcdn.com.br/img/img_prod/1037527/bebedouro_para_roedores_coelho_chinchila_bico_aluminio_290ml_827_1_0fd1c779c273a41a3e9c5fe5b04b7002.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      },
      {
        CATEGORIA_ID: 5,                 
        NOME_PRODUTO: 'Brinquedos de porquinho-da-índia',
        DESCRICAO: '1. Feito de uma seleção rigorosa de materiais de aroma de madeira natural, que são bons para digestão e aumentam o apetite dos animais de estimação. Os brinquedos de mastigar para animais de estimação são feitos à mão com grama natural e madeira de frutas para ajudar os animais de estimação a triturar os dentes e evitar que os dentes cresçam muito rápido.', 
        PRECO: 68.79, 
        IMAGEM_URL: 'https://m.media-amazon.com/images/I/71AktEPl05L._AC_SX679_.jpg',
        PROMOCAO: 0,
        DESTAQUE: 1,
        SEM_ESTOQUE: 0, 
        ATIVO: 1,                    //  1: SIM e 0: NÃO
        CREATED_At: (new Date()).toJSON().substring(0,19),
        UPDATED_AT: (new Date()).toJSON().substring(0,19)
      }
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PRODUTOS', null, {});
  }
};
