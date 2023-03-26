const express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');

const router = express.Router();

router.get('/carrinho', CarrinhoController.showCarrinhoPage);
router.get('/carrinho/:id', CarrinhoController.showCarrinhoPage);


module.exports = router;