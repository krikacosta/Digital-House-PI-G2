const express = require('express');
const FinalizarCompraController = require('../controllers/FinalizarCompraController');

const router = express.Router();

router.get('/finalizarCompra', FinalizarCompraController.showFinalizarCompraPage);


module.exports = router;