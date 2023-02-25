const express = require('express');
const AlterarSenhaController = require('../controllers/AlterarSenhaController');

const router = express.Router();

router.get('/alterarsenha', AlterarSenhaController.showAlterarSenhaPage);


module.exports = router;