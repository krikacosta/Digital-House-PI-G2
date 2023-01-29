const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

router.get('/produto', ProdutoController.showProdutoPage);


module.exports = router;