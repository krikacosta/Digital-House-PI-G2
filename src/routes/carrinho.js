const express = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');

const router = express.Router();

router.get('/carrinho', CarrinhoController.showCarrinhoPage);


module.exports = router;