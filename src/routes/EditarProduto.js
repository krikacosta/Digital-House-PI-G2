const express = require('express');
const EditarProdutoController = require('../controllers/EditarProdutoController');

const router = express.Router();

router.get('/editarproduto', EditarProdutoController.showEditarProdutoPage);


module.exports = router;