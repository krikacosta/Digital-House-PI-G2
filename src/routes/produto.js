const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const CarrinhoController = require('../controllers/CarrinhoController')

const router = express.Router();

// router.get('/produto', ProdutoController.showProdutos);
router.post('/carrinho/adicionar', CarrinhoController.addCart);
router.get('/produto/:id', ProdutoController.showProdutoPage);

module.exports = router;