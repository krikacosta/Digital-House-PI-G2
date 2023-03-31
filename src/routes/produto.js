const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const CarrinhoController = require('../controllers/CarrinhoController')


// router.get('/produto', ProdutoController.showProdutos);
router.post('/carrinho/adicionar', CarrinhoController.addCart);
// router.get('/carrinho/adicionar', CarrinhoController.addCart);
router.get('/produto/:id', ProdutoController.showProdutoPage);

module.exports = router;