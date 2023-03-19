const express = require('express');
const CadastrarNovoEndController = require('../controllers/CadastrarNovoEndController');

const router = express.Router();

router.get('/cadastrarNovoEnd', CadastrarNovoEndController.showCadastrarNovoEndPage);


module.exports = router;