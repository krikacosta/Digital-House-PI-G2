// const {Pedido} = require("../../models")

console.log("página carrinho")
// const CarrinhoController = {

//         showCarrinhoPage: (req, res) => {
//             // console.log("show carrinho do produto ", produto)
//             const carrinho  = req.body;
//             console.log("show carrinho ", carrinho)
    
//             // let total = 0;
    
//             // if (!carrinho) {
//             //     return res.render('carrinho', { carrinho: [], total });
//             // }
    
//             // carrinho.forEach(produto => {
//             //     total += Number(produto.produto_preco);
//             // });
    
//             return res.render('carrinho', { carrinho });
//         },

//     // showCarrinhoPage: async (req, res) => {
//     // showCarrinhoPage: (req, res) => {
//         // const { carrinho } = req.params;

//         // const carrinho = await Pedido.findByPk(id)

//         // return res.render("carrinho", {carrinho});
//     // },
//     addCart: (req, res) => {
        
//         const {produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor} = req.body;
//         const produto = {produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor};
        
//         req.carrinho = {produto};
//         // for(let element of produto) { 
//         //     console.log("teste" , element)
            
//         // };

//         // console.log("show add produto ", typeof(produto))

//         return res.redirect('/carrinho')
//     }

// }

const CarrinhoController = {
    showCarrinhoPage: (req, res) => {
    //   const carrinho = req.carrinho || [];
      const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.carrinho || [];
      const carrinho = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
      console.log(" teste desta bagaçca ", carrinho)
    //   carrinho.forEach(item =>{ console.log (item)})
      let total = 0;
  
    //   carrinho.forEach(produto => {
    //     total += Number(produto.produto_preco);
    //   });
  
      return res.render('carrinho', { carrinho, total });
    },
  
    addCart: (req, res) => {
      const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.body;
      // console.log(req.body)
      // const produto = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
      
      // req.carrinho = req.carrinho || [];
      // req.carrinho.push(produto);
  
      // return res.render('carrinho', { produto });
      return res.render('carrinho', { produto: req.body }); 
    }
  };

  module.exports = CarrinhoController;

// const carrinho = [];

// const CarrinhoController = {
//   addCart: (req, res) => {
//     const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.body;
//     const produto = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
    
//     carrinho.push(produto);

//     return res.redirect('/carrinho');
//   },

//   showCarrinhoPage: (req, res) => {
//     let total = 0;

//     carrinho.forEach(produto => {
//       total += Number(produto.produto_preco);
//     });

//     req.session.carrinho = req.session.carrinho || [];
//     req.session.carrinho.push(produto);

//     return res.render('carrinho', { carrinho: req.session.carrinho, total });
//   },

//   clearCart: (req, res) => {
//     carrinho.length = 0;
//     return res.redirect('/carrinho');
//   }
// };

