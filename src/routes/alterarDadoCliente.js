const express = require('express');
const AlterarDadoClienteController = require('../controllers/AlterarDadoClienteController');

const router = express.Router();

router.get('/alterardadocliente', AlterarDadoClienteController.showAlterarDadoClientePage);


module.exports = router;