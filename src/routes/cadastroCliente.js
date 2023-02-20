const express = require('express');
const ProdutoController = require('../controllers/cadastroClientecontroller');

const router = express.Router();

router.get('/cadastroCliente', cadastroClienteController.showProdutoPage);


module.exports = router;