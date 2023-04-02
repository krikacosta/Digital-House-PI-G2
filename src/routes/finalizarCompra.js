const express = require('express');
const router = express.Router();
const FinalizarCompraController = require('../controllers/FinalizarCompraController');
const CarrinhoController = require('../controllers/CarrinhoController');
const CadastrarNovoEndController = require('../controllers/CadastrarNovoEndController');



router.post('/finalizarCompra', FinalizarCompraController.showFinalizarCompraPage);
// router.get('/cadastrarNovoEnd', CadastrarNovoEndController.showCadastrarNovoEndPage);
router.get('/finalizarCompra/:id', FinalizarCompraController.showFinalizarCompraPage);
router.post('/finalizarCompra/:id/deletar', FinalizarCompraController.removeCart);
router.post('/carrinho/:id/deletar', CarrinhoController.removeCart);




module.exports = router;