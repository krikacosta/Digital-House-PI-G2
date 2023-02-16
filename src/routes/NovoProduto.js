const express = require('express');
const NovoProdutoController = require('../controllers/NovoProdutoController');

const router = express.Router();

router.get('/novoproduto', NovoProdutoController.showNovoProdutoPage);


module.exports = router;