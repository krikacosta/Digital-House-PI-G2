console.log("página carrinho")
let carrinho = [];

const CarrinhoController = {
  showCarrinhoPage: (req, res) => {
    // let carrinho = [];
    // const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.carrinho;
    // const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.carrinho || [];
    // carrinho = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
    console.log(" teste desta bagaçca ", carrinho)
    let total = 0;
    
    
    return res.render('carrinho', { carrinho, total });
  },
  
  addCart: (req, res) => {
      const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.body;
      const produto = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
      
      // console.log(carrinho, carrinho.length);
      
      let total = 0;
      
      if (!carrinho) {
        return res.render('carrinho', { carrinho, total });
      }
      
      carrinho.push(produto);
      
      // console.log(carrinho, carrinho.length);

      carrinho.forEach(produto => {
        total += Number(produto.produto_preco);
      });
      
      return res.render('carrinho', { carrinho, total});
      // return res.render('carrinho', { carrinho: req.body }); 
    },

    removeCart: (req, res) => {
      let carrinho = [];
      const { id } = req.params;
      // let { carrinho } = req.body;
      carrinho = JSON.parse(req.body.carrinho);

      // const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.body;
      // const produto = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
      
      const index = carrinho.findIndex(produto => produto.produto_id == id);
      carrinho.splice(index, 1);
      // carrinho = carrinhoAtualizado;

      console.log(id);
      console.log(carrinho);
      // console.log(produto);

      let total = 0;

      if (carrinho.length <= 0) {
          carrinho = [];
          return res.render('carrinho', { carrinho, total});
      }

      carrinho.forEach(produto => {
        total += Number(produto.produto_preco);
    });

      return res.render('carrinho', { carrinho, total});
  }


  };

  module.exports = CarrinhoController;

