const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const ProdutoController = require('../controllers/ProdutoController');


router.get('/carrinho', CarrinhoController.showCarrinhoPage);
router.post('carrinho/adicionar', CarrinhoController.addCart);
// router.get('carrinho/adicionar', CarrinhoController.addCart);
router.get('/carrinho/:id', CarrinhoController.showCarrinhoPage);


module.exports = router;