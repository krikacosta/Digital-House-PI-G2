console.log("página finalizarCompra")
let carrinhocompra = [];
// let carrinho = [];

const FinalizarCompraController = {
    showFinalizarCompraPage: (req, res) => {
        
      carrinhocompra = JSON.parse(req.body.compra);
      
      console.log(carrinhocompra);
      
      let total = 0;

      if (carrinhocompra.length <= 0) {
          carrinhocompra = [];
          // carrinho = [];
          return res.render('finalizar_compra', { carrinhocompra, total});
      }

      carrinhocompra.forEach(produto => {
        total += Number(produto.produto_preco);
      });

      return res.render('finalizar_compra', { carrinhocompra, total});
    },

    removeCart: (req, res) => {
      const { id } = req.params;
      carrinhocompra = JSON.parse(req.body.carrinhocompra);
      // carrinho = JSON.parse(req.body.carrinho);
 
      const index = carrinhocompra.findIndex(produto => produto.produto_id == id);
      carrinhocompra.splice(index, 1);
      // carrinho.splice(index, 1);

      console.log(id);
      console.log(carrinhocompra);

      let total = 0;

      if (carrinhocompra.length <= 0) {
        carrinhocompra = [];
        carrinho = [];
        return res.render('finalizar_compra', { carrinhocompra, total});
      }

      carrinhocompra.forEach(produto => {
        total += Number(produto.produto_preco);
      });

      return res.render('finalizar_compra', { carrinhocompra, total});
    }

}

module.exports = FinalizarCompraController;