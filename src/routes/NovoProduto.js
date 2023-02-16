const express = require('express');
const NovoProdutoController = require('../controllers/NovoProdutoController');

const router = express.Router();

router.get('/', NovoProdutoController.showHomePage);


module.exports = router;