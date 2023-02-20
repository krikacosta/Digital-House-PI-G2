const express = require('express');
const cadastroClienteController = require('../controllers/cadastroClienteController');

const router = express.Router();

router.get('/cadastroCliente', cadastroClienteController.showProdutoPage);


module.exports = router;