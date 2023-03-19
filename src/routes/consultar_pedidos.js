const express = require('express');
const consultar_pedidosController = require('../controllers/consultar_pedidosController');

const router = express.Router();

router.get('/consultar_pedidos', consultar_pedidosController.showProdutoPage);


module.exports = router;