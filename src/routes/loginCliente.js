const express = require('express');
const loginClienteController = require('../controllers/loginClienteController');

const router = express.Router();

router.get('/loginCliente', loginClienteController.showProdutoPage);


module.exports = router;