console.log("página carrinho")
let carrinho = [];

const CarrinhoController = {
  showCarrinhoPage: (req, res) => {
    let total = 0;
    
    return res.render('carrinho', { carrinho, total });
  },
  
  addCart: (req, res) => {
      const { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor } = req.body;
      const produto = { produto_id, produto_nome, produto_img, produto_preco, produto_tamanho, produto_cor };
      
      let total = 0;
      
      if (!carrinho) {
        return res.render('carrinho', { carrinho, total });
      }
      
      carrinho.push(produto);
      
      carrinho.forEach(produto => {
        total += Number(produto.produto_preco);
      });
      
      return res.render('carrinho', { carrinho, total});
      
  },

  removeCart: (req, res) => {
      const { id } = req.params;
  
      carrinho = JSON.parse(req.body.carrinho);

      const index = carrinho.findIndex(produto => produto.produto_id == id);
      carrinho.splice(index, 1);
  
      console.log(id);
      console.log(carrinho);

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

