const express = require('express');
const EditarProdutoController = require('../controllers/EditarProdutoController');

const router = express.Router();

router.get('/', EditarProdutoController.showHomePage);


module.exports = router;