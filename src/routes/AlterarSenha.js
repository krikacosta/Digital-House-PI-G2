const express = require('express');
const AlterarSenhaController = require('../controllers/AlterarSenhaController');

const router = express.Router();

router.get('/', AlterarSenhaController.showHomePage);


module.exports = router;